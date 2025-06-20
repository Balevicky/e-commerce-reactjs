/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 07/06/2025 14:39:07
*/
import React, { FC, useEffect, useState } from "react";
import "./StripeCheckoutForm.css";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { formatPrice } from "../../../../helpers/utils";
import { getCartSubTotal } from "../../../../redux/selectors/selectors";
import Loading from "../../../Loading/Loading";
// import { getCartSubTotal } from "../../../../redux/selectors/selectors";
// import { formatPrice } from "../../../../helpers/utils";
// import Loading from "../../../../pages/Loading/Loading";

interface StripeCheckoutFormProps {}

const StripeCheckoutForm: FC<StripeCheckoutFormProps> = () => {
  const stripe = useStripe();
  const elements = useElements();
  const subTotal = useSelector(getCartSubTotal);

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    console.log(clientSecret);

    console.log(email);

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + "/stripe-payment-success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: any = {
    layout: "tabs",
    // layout: {
    //   type: "accordion",
    //   defaultCollapsed: false,
    //   radios: true,
    //   spacedAccordionItems: false,
    // },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e?.target?.value)}
      />
      {!stripe || !elements ? <Loading /> : null}
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="btn btn-fill-out"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner btn btn-fill-out" id="spinner"></div>
          ) : (
            `Pay now (${formatPrice(subTotal)})`
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripeCheckoutForm;
