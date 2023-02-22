import { useEffect } from "react";
import { useParams } from "react-router-dom";
import authApi from "../../../services/authApi";
import { useNavigate } from "react-router-dom";
import cookie from "../../../utils/cookie";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";

function LoginSuccess() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function logginWithGoogle() {
      try {
        const response = await authApi.loginSuccess(params.id);

        cookie.setCookie("token", response.data);
        dispatch(login());
        navigate("/register", { replace: true });
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    }
    logginWithGoogle();
  }, [params.id, navigate, dispatch]);

  return;
}

export default LoginSuccess;
