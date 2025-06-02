/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/05/2025 10:00:53
*/
import React, { FC, useEffect, useState } from "react";
import "./Footer.css";
import { Meta } from "../../models/meta";
import { getMetas } from "../../helpers/utils";
import { Link } from "react-router-dom";
import { Page } from "../../models/page";
import { resquestResponse } from "../../models/resquestResponse";
import { searchDatas } from "../../api/entity";
import SubscribeComponent from "../SubscribeComponent/SubscribeComponent";

interface FooterProps {
  metas: Meta[];
}

const Footer: FC<FooterProps> = ({ metas }) => {
  const [pages, setPages] = useState<Page[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      let query = "isBottom=true";
      const data: resquestResponse = await searchDatas("page", query);
      if (data.isSuccess) {
        setPages(data.results as Page[]);
      }
    };
    runLocalData();
  }, []);

  return (
    <div className="Footer">
      <SubscribeComponent />
      <footer className="footer_dark">
        <div className="footer_top">
          {/* <div className="container "> */}
          <div className="container-lg ">
            {/* <div className="row "> */}
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget">
                  <div className="footer_logo">
                    <a href="#">
                      <h2>{getMetas(metas, "site_name")}</h2>
                    </a>
                  </div>
                  <p>{getMetas(metas, "site_description")}</p>
                </div>
                <div className="widget">
                  <ul className="social_icons social_white">
                    <li>
                      {getMetas(metas, "facebook_link") ? (
                        <a
                          target="_blank"
                          href={getMetas(metas, "facebook_link")}
                        >
                          <i className="ion-social-facebook" />
                        </a>
                      ) : null}
                    </li>
                    <li />
                    <li />
                    <li>
                      {getMetas(metas, "youtube_link") ? (
                        <a
                          target="_blank"
                          href={getMetas(metas, "youtube_link")}
                        >
                          <i className="ion-social-youtube-outline" />
                        </a>
                      ) : null}
                    </li>
                    <li>
                      {getMetas(metas, "instagram_link") ? (
                        <a
                          target="_blank"
                          href={getMetas(metas, "instagram_link")}
                        >
                          <i className="ion-social-instagram-outline" />
                        </a>
                      ) : null}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Useful Links</h6>
                  <ul className="widget_links">
                    {pages.map((page: Page) => {
                      return (
                        <li key={page._id}>
                          <Link to={"/page/" + page.slug}>{page.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Category</h6>
                  <ul className="widget_links">
                    <li>
                      <a href="#">Men</a>
                    </li>
                    <li>
                      <a href="#">Woman</a>
                    </li>
                    <li>
                      <a href="#">Kids</a>
                    </li>
                    <li>
                      <a href="#">Best Saller</a>
                    </li>
                    <li>
                      <a href="#">New Arrivals</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">My Account</h6>
                  <ul className="widget_links">
                    <li>
                      <Link to="/account">My Account</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms</Link>
                    </li>
                    <li>
                      <a ng-reflect-router-link="signin" href="/signin">
                        SignIn
                      </a>
                    </li>
                    <li>
                      <a ng-reflect-router-link="signup" href="/signup">
                        Signup
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Contact Info</h6>
                  <ul className="contact_info contact_info_light">
                    <li>
                      <i className="ti-location-pin" />
                      <p>{getMetas(metas, "site_adress")}</p>
                    </li>
                    <li>
                      <i className="ti-email" />
                      <a href={"mailto:" + getMetas(metas, "site_email")}>
                        {getMetas(metas, "site_email")}
                      </a>
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <p>{getMetas(metas, "site_phone")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer border-top-tran">
          <div className="container-fluid px-3 ">
            <div className="row">
              <div className="col-md-6">
                {/* <p className="mb-md-0 text-center text-md-start"> */}
                <p className="mb-md-0 text-center text-md-center">
                  {" "}
                  {getMetas(metas, "site_rights")}
                </p>
              </div>
              <div className="col-md-6">
                <ul className="footer_payment text-center text-lg-end d-flex gap-2 justify-content-center">
                  <li>
                    <a href="#">
                      <img src="assets/images/visa.png" alt="visa" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/discover.png" alt="discover" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/master_card.png"
                        alt="master_card"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/images/paypal.png" alt="paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/images/amarican_express.png"
                        alt="amarican_express"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
