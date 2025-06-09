import { webApiUrl } from "../environements/environement";
import { post } from "./fecthHelppers";

export const createPaymentIntent = async (paymentMethod: string, data: any) => {
  const url =
    webApiUrl +
    "payment/create-" +
    paymentMethod +
    "-payment-intent?paymentMethode=" +
    paymentMethod;
console.log(url);

  const datas = await post(url, data);

  return datas;
};

export const captureOrder = async (paymentMethod: string, data: any) => {
  const url = webApiUrl + "payment/capture-" + paymentMethod + "-order";

  const datas = await post(url, data);

  return datas;
};
