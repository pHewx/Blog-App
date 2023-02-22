import cookie from "../utils/cookie";
import { Navigate } from "react-router-dom";

function CheckLogin({ children }) {
  const isLogged = cookie.getCookie("token");

  return isLogged ? <Navigate to="/" /> : children;
}

export default CheckLogin;
