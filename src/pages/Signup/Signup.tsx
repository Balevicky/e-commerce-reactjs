/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2025 10:29:54
*/
import React, { FC, useEffect, Fragment } from "react";
// import Loading from '../Loading/Loading';
import "./Signup.css";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validateRegisterForm } from "../../helpers/utils";
import { signup } from "../../api/entity";

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');
  const validate = (values: any) => validateRegisterForm(values);
  const formik = useFormik({
    initialValues: {
      fullName: "Goli",
      email: "calevictorien@yahoo.fr",
      password: "Golbi0860",
      confirmPassword: "Golbi0860",
      acceptedTerms: true,
      roles: [],
    },
    validate,
    onSubmit: async (user) => {
      const result = await signup(user);
      alert(JSON.stringify(result, null, 2));
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // setLoading(false)
    };
    runLocalData();
  }, []);

  return (
    <Fragment>
      {/* {loading ? <Loading /> : */}
      <div className="Signup">
        {/* ======================== */}
        <PageBanner name="Register Form" />
        <div className="main_content">
          <div className="login_register_wrap section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-md-10">
                  <div className="login_wrap">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3>Create an Account</h3>
                      </div>
                      <form
                        onSubmit={formik.handleSubmit}
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Your Name"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                          />
                          {formik.touched.fullName && formik.errors.fullName ? (
                            <div className="error text-danger">
                              {formik.errors.fullName}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="error text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control ng-untouched ng-pristine ng-invalid"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <div className="error text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                          />
                          {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword ? (
                            <div className="error text-danger">
                              {formik.errors.confirmPassword}
                            </div>
                          ) : null}
                        </div>
                        <div className="login_footer form-group mb-3">
                          {/* <div className="chek-form"> */}
                          <div className="">
                            <div className="custome-checkbox">
                              <input
                                type="checkbox"
                                name="acceptedTerms"
                                id="exampleCheckbox2"
                                className="form-check-input"
                                onChange={formik.handleChange}
                                checked={formik.values.acceptedTerms}
                              />
                              <label
                                htmlFor="exampleCheckbox2"
                                // className="form-check-label"
                                className=""
                              >
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                              {formik.touched.acceptedTerms &&
                              formik.errors.acceptedTerms ? (
                                <div className="error text-danger">
                                  {formik.errors.acceptedTerms}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <button
                            type="submit"
                            name="register"
                            className="btn btn-fill-out btn-block"
                          >
                            Register
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
                        Already have an account?{" "}
                        <Link to="/signin">Log in</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================== */}
      </div>
      {/* } */}
    </Fragment>
  );
};

export default Signup;
