/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 05/06/2025 09:40:49
*/
import React, { FC, useEffect, useState } from "react";
import "./PaimentModal.css";
// import StripeCheckout from "../StripeCheckout/StripeCheckout";
// import StripeCheckoutForm from "../PaymentMethods/Stripe/StripeCheckoutForm/StripeCheckoutForm";
import StripeComponent from "../PaymentMethods/Stripe/StripeComponent/StripeComponent";
import PaypalComponent from "../PaymentMethods/Paypal/PaypalComponent/PaypalComponent";
import SwitchOnOff from "../SwitchOnOff/SwitchOnOff";

interface PaimentModalProps {
  close: () => void;
}

const PaimentModal: FC<PaimentModalProps> = ({ close }) => {
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      const modal = new (window as any).bootstrap.Modal("#paimentModal", {
        keyboard: false,
      });
      modal.show();
    };
    runLocalData();
  });

  const handleSetPaymentMethod = (bool: boolean) => {
    setPaymentMethod(bool);
  };
  return (
    <div className="PaimentModal">
      <div
        className="modal fade"
        id="paimentModal"
        aria-labelledby="paimentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrolleble">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="paimentModalLabel">
                Payment Modal
              </h1>
              <button
                onClick={close}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
              </button>
            </div>
            <div className="modal-body">
              {/* Payment Form */}
              {/* <StripeCheckout /> */}
              {/* <StripeComponent /> */}
              {/* ================== */}
              <div className="select-payment-method">
                <div className="payment-methode-name">Stripe</div>
                <SwitchOnOff
                  status={false}
                  setStatus={handleSetPaymentMethod}
                />
                <div className="payment-methode-name">Paypal</div>
              </div>
              {!paymentMethod ? <StripeComponent /> : <PaypalComponent />}
              {/* {paymentMethod ? <StripeComponent /> : <PaypalComponent />}// code goli*/}
              {/* ================== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaimentModal;
