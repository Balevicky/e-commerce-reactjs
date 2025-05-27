/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/05/2025 10:12:06
*/
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuthState } from "../../redux/selectors/authSelectors";

const PrivateRoute = ({ children }: any) => {
  const isAuth = useSelector(getAuthState);
  // let auth: any = localStorage.getItem("auth")

  // if (auth) {
  //   const { token, userId } = JSON.parse(auth)
  //   isAuth = !!token && !!userId
  // }

  return isAuth ? children : <Navigate replace to="/signin" />;
};

export default PrivateRoute;
