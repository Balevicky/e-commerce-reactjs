/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2025 11:16:17
*/
import React, { FC, useEffect } from "react";
import "./PageBanner.css";
import { Link } from "react-router-dom";

interface PageBannerProps {
  name: string;
}

const PageBanner: FC<PageBannerProps> = ({ name }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  });

  return (
    <div className="PageBanner">
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* STRART CONTAINER */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>{name}</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Pages</Link>
                </li>
                <li className="breadcrumb-item active">{name}</li>
              </ol>
            </div>
          </div>
        </div>
        {/* END CONTAINER*/}
      </div>
    </div>
  );
};

export default PageBanner;
