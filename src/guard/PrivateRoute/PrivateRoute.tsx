/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/05/2025 10:12:06
*/
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthState } from "../../redux/selectors/selectors";
import { setItem } from "../../services/localstrorage.service";

const PrivateRoute = ({ children }: any) => {
  const isAuth = useSelector(getAuthState);
  const location = useLocation();
  // let auth: any = localStorage.getItem("auth")

  if (!isAuth) {
    setItem("pathname", location.pathname);
  }
  // if (auth) {
  //   const { token, userId } = JSON.parse(auth)
  //   isAuth = !!token && !!userId
  // }

  return isAuth ? children : <Navigate replace to="/signin" />;
};

export default PrivateRoute;
