import { Meta } from "../models/meta";
import { Product } from "../models/products";

export const getMetas = (metas: Meta[], name: string) => {
  let value = "";
  const datas = metas.filter((meta) => meta.name === name);
  if (datas.length) {
    value = datas[0].value;
  }
  return value;
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
    script.id = "firstScript";
    console.log(script?.id);
    console.log("lu");
    document.body.appendChild(script);
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