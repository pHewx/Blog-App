import axiosClient from "./axiosClient";

const authApi = {
  loginSuccess: (id) => {
    return axiosClient.post("/api/auth/login-success", { id: id });
  },
};

export default authApi;
