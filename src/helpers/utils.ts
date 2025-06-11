import { webApiUrl } from "../environements/environement";
import { Meta } from "../models/meta";
import { Product } from "../models/products";
import { resquestResponse } from "../models/resquestResponse";
import { getItem } from "../services/localstrorage.service";

export const getMetas = (metas: Meta[], name: string) => {
  let value = "";
  const datas = metas.filter((meta) => meta.name === name);
  if (datas.length) {
    value = datas[0].value;
  }
  return value;
};
// =================
// ====Pour la securisation des requetes avec des tokens

export const getToken = () => {
  const auth = getItem("auth");
  if (auth && auth.token) {
    // console.log(auth.token);
    return auth.token;
  }
  return "";
};
// =============== Pour gerer les chemins des images
const cleanImageUrl = (imageUrl: string) => {
  // decouper url ancien
  const newImageUrl = webApiUrl + "/assets" + imageUrl.split("/assets")[1];
  return newImageUrl;
};
export const cleanData = (datas: resquestResponse) => {
  if (datas.isSuccess) {
    if (datas?.result) {
      if (datas?.result?.imageUrl) {
        datas.result.imageUrl = cleanImageUrl(datas.result.imageUrl);
      }
      // ======
      if (datas?.result?.imageUrls) {
        datas.result.imageUrls.map((imageUrl: string) => {});
      }
    }
    // ==========
    if (datas?.results) {
      datas.results = datas?.results.map((result) => {
        if (result?.imageUrl) {
          result.imageUrl = cleanImageUrl(result.imageUrl);
        }
        return result;
      });
    }
  }
  return datas;
};
// ======================
export const reductionRate = (product: Product) => {
  let result = 0;
  // const { solde_price, regular_price} = product
  result =
    ((product.regular_price - product.solde_price) * 100) /
    product.regular_price;
  return result.toFixed(0);
};
// ===============================

export const loadScript = () => {
  const firstScript = document.getElementById("firstScript");
  console.log(firstScript?.id);

  if (!firstScript) {
    const script = document.createElement("script");
    script.src = "/assets/js/scripts.js";
    console.log(script?.id);
    script.id = "firstScript"; //+ Number(Math.random() * 100).toFixed(0);
    console.log(script?.id);
    console.log("lu");
    document.body.appendChild(script);

    console.log(document.body.appendChild(script));
  }
};

// ===============================
export const validateRegisterForm = (values: any) => {
  const errors: any = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = "Must be 6 characters or more";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "The password not match";
  } else if (values.confirmPassword.length > 20) {
    errors.confirmPassword = "Must be 20 characters or less";
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = "Required";
  }
  return errors;
};
// ===============================
export const validateAddressForm = (values: any) => {
  const errors: any = {};
  if (!values.address_type) {
    errors.address_type = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.street) {
    errors.street = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.code_postal) {
    errors.code_postal = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }

  return errors;
};
// ================================
export const validateLoginForm = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};
// ================================
export const validateSubscribeForm = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }
  return errors;
};
// ================================
export const formatPrice = (price: number, currency: string = "EUR") => {
  let options = {
    style: "currency",
    currency: currency,
  };
  return new Intl.NumberFormat("fr-FR", options as any).format(price);
};
// ================================
export const sonoreEffet = (status = "success") => {
  const audio = document.createElement("audio");
  audio.src = `/assets/audios/${status}.wav`;
  audio.play();
};
// ================================

export const generateId = () => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};
