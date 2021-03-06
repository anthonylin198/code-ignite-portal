import { createSlice } from "@reduxjs/toolkit";
import { loadUserAction } from "../actions/user";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    completion: {},
    bio: "",
    isAuthenticated: false,
  },
  reducers: {
    // ! put the actions here
    testReducer: (state) => {
      state.completion["test"] = 1;
    },
    // todo: load user action
    loadUser: (state, userData) => {
      const { name, email } = userData.payload;
      state.name = name;
      state.email = email;
      state.isAuthenticated = true;
    },
    // todo: Register action
    register: (state, payload) => {
      // if register is a success then we set to the payload
    },
    // todo: logout user action - we just remove all the user data
    logout: (state) => {
      localStorage.removeItem("token");
      state.name = "";
      state.email = "";
      state.isAuthenticated = false;
    },
  },
  // must put asyncstuff here
  extraReducers: {
    [loadUserAction.fulfilled]: (state, action) => {
      if (action.payload) {
        const { name, email } = action.payload;
        state.name = name;
        state.email = email;
        state.isAuthenticated = true;
      } else {
        state.name = "";
        state.email = "";
        state.isAuthenticated = false;
      }
    },
  },
});
