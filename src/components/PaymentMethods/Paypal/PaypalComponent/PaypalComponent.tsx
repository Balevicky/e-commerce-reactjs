/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 10/06/2025 11:08:40
*/
import React, { FC, useEffect, useState } from "react";
import "./PaypalComponent.css";
import { useSelector } from "react-redux";
import {
  getCarrier,
  getCart,
  getCurrentAddress,
  getUserId,
} from "../../../../redux/selectors/selectors";
import { captureOrder, createPaymentIntent } from "../../../../api/payment";

import Loading from "../../../Loading/Loading";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PaypalComponentProps {}

const PaypalComponent: FC<PaypalComponentProps> = () => {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cart = useSelector(getCart);
  const userId = useSelector(getUserId);
  const carrier = useSelector(getCarrier);
  const currentAddress = useSelector(getCurrentAddress);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      const data = {
        cart,
        carrier,
        userId,
        ...currentAddress,
      };
      const paymentIntent = await createPaymentIntent("Paypal", data);

      if (paymentIntent?.isSuccess && paymentIntent?.data?.id) {
        setOrderId(paymentIntent.data.id);
      }
      if (process.env.NODE_ENV === "development") {
        // setPublicApiKey(paymentIntent?.TEST_PUBLIC_API_KEY)
        setClientId(paymentIntent?.TEST_PUBLIC_API_KEY);
      } else if (process.env.NODE_ENV === "production") {
        // setPublicApiKey(paymentIntent?.PROD_PUBLIC_API_KEY)
        setClientId(paymentIntent?.PROD_PUBLIC_API_KEY);
      }
      // ====================
    };
    runLocalData();
  }, [cart]);

  const initialOptions: any = {
    clientId: clientId,
    currency: "EUR",
    intent: "capture",
  };

  const createOrder = (): any => {
    return orderId;
    // return "test";
  };
  const onApprove = (data: any): any => {
    setIsLoading(true);
    const runCapture = async () => {
      const orderData: any = await captureOrder("Paypal", data);
      console.log({ orderData });
      switch (orderData.status) {
        case "COMPLETED":
          setMessage("Payment succeeded!");
          window.location.href =
            window.location.origin + "/paypal-payment-success";
          setIsLoading(false);
          break;

        default:
          break;
      }
    };
    runCapture();
    // return orderId
  };
  const onError = (error: any) => {
    setMessage(error.message);
  };

  return (
    <div className="PaypalComponent">
      {/* {orderId && clientId && !isLoading ? (
        <>
          {message && <div className="error">{message}</div>}

          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </PayPalScriptProvider>
        </>
      ) : (
        <Loading />
      )} */}
    </div>
  );
};

export default PaypalComponent;
