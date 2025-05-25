/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2025 10:29:53
*/
import React, { FC, useEffect, Fragment, useState } from "react";
// import Loading from '../Loading/Loading';
import "./Signin.css";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Link } from "react-router-dom";

interface SigninProps {}

const Signin: FC<SigninProps> = () => {
  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // setLoading(false)
    };
    runLocalData();
  }, []);

  return (
    <Fragment>
      {/* {
      loading ?
      <Loading />
      : */}
      <div className="Signin">
        <PageBanner name="Login Form" />
        {/* ========================== */}
        <div className="main_content">
          <div className="login_register_wrap section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-md-10">
                  <div className="login_wrap">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3>Login</h3>
                      </div>
                      <form
                        ng-reflect-form="[object Object]"
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                          />
                        </div>
                        <div className="login_footer form-group mb-3">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox1"
                                // defaultValue={}

                                className="form-check-input"
                              />
                              <label
                                htmlFor="exampleCheckbox1"
                                className="form-check-label"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <a href="#">Forgot password?</a>
                        </div>
                        <div className="form-group mb-3">
                          <button
                            type="submit"
                            name="login"
                            className="btn btn-fill-out btn-block"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                      <div className="different_login">
                        <span>or</span>
                      </div>
                      <ul className="btn-login list_none text-center">
                        <li>
                          <a href="#" className="btn btn-facebook">
                            <i className="ion-social-facebook" />
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn btn-google">
                            <i className="ion-social-googleplus" />
                            Google
                          </a>
                        </li>
                      </ul>
                      <div className="form-note text-center">
                        Don't Have an Account?{" "}
                        <Link to="/signup">Sign up now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========================== */}
      </div>
      {/* } */}
    </Fragment>
  );
};

export default Signin;
