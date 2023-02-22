import cookie from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

function DashBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    cookie.removeCookie("token");
    dispatch(logout());
    navigate("/login");
  }
  return (
    <>
      DashBoard
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default DashBoard;
