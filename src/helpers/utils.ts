import { Meta } from "../models/meta";

export const getMetas = (metas: Meta[], name: string) => {
  let value = "";
  const datas = metas.filter((meta) => meta.name === name);
  if (datas.length) {
    value = datas[0].value;
  }
  return value;
};


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
   } else if (values.password.length < 2) {
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
