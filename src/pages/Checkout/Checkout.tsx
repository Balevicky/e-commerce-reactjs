/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 29/05/2025 16:27:34
*/
import React, { FC, useEffect } from "react";
import "./Checkout.css";
import PageBanner from "../../components/PageBanner/PageBanner";

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  });

  return (
    <div className="Checkout">
      <PageBanner name="Login Form" />
      Checkout Component
    </div>
  );
};

export default Checkout;
