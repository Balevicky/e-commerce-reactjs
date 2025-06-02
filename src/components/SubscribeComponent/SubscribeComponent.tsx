/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 02/06/2025 15:57:17
*/
import React, { FC, useEffect, useState } from "react";
import "./SubscribeComponent.css";
import { useFormik } from "formik";
import { addData, signin } from "../../api/entity";
import { generateId, validateSubscribeForm } from "../../helpers/utils";
import { ADD_NOTIFICATION, CONNECTED } from "../../redux/actions/actionType";
import { useDispatch } from "react-redux";
import { User } from "../../models/user";

interface SubscribeComponentProps {}

const SubscribeComponent: FC<SubscribeComponentProps> = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const validate = (values: any) => validateSubscribeForm(values);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      // email: "balevictorien@yahoo.fr",
    },
    validate,
    onSubmit: async (user: User) => {
      const result = await addData("newsletter", { newsletter: user });
      // alert(JSON.stringify(result, null, 2));
      if (result.isSuccess) {
        dispatch({
          type: ADD_NOTIFICATION,
          payload: {
            _id: generateId(),
            message: "Subsciption completed !",
            status: "success",
            timeout: 4000,
          },
        });
        // setRedirect(true);
        // setFormError("");
        // const day: any = dispatch({
        //   type: CONNECTED,
        //   payload: {
        //     token: result.token,
        //     userId: result.userId,
        //   },
        // });
        // console.log(day);
      } else {
        // setRedirect(false);
        setFormError(result.message);
      }
    },
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  });

  return (
    <div className="SubscribeComponent">
      {/* ======================== */}
      <div className="section bg_default small_pt small_pb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="heading_s1 mb-md-0 heading_light">
                <h3>Subscribe Our Newsletter</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="newsletter_form">
                <div className="error text-danger">{formError}</div>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    required
                    name="fullName"
                    className="form-control rounded-0"
                    placeholder="Enter Fullnames"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.fullName}
                  />

                  <input
                    type="text"
                    required
                    name="email"
                    className="form-control rounded-0"
                    placeholder="Enter Email Address"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.email}
                  />
                  {/* {formik.touched.email && formik.errors.email ? (
                    <div className="error-white ">{formik.errors.email}</div>
                  ) : null} */}
                  <button
                    type="submit"
                    className="btn btn-dark rounded-0"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
                {formik.touched.fullName && formik.errors.email ? (
                  <div className="error-white ">{formik.errors.fullName}</div>
                ) : null}
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-white ">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== */}
    </div>
  );
};

export default SubscribeComponent;
