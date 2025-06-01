/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2025 16:12:09
*/
import React, { FC, useEffect } from "react";
import "./Compare.css";
import PageBanner from "../../components/PageBanner/PageBanner";

interface CompareProps {}

const Compare: FC<CompareProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  });

  return (
    <div className="Compare">
      <PageBanner name="Compare Product" />
      Compare Component
    </div>
  );
};

export default Compare;
