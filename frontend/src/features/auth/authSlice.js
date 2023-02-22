import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const selectUser = (state) => state.auth;

export const { login, logout } = authSlice.actions;
