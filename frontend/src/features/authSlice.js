import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetch } from '../config/config.js'
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isProtected: true,
    isAuthenticated: true,
    users: []
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.data
    }
  },
});


export const registerUser = (formValues) => {
  console.log(formValues);
  let pathname;
  return async (dispatch, getState) => {
    // console.log("hit register");
    try {
      const res = await fetch('/register', 'post', formValues)
      console.log(res.data);
      pathname = 'http://localhost:3000/'
    } catch (err) {
      console.log(err);
    }
    finally {
      window.location.href = pathname

    }
  };
};

export const getUsers = (formValues) => {
  console.log(formValues);
  return async (dispatch, getState) => {
    // console.log("hit register");
    try {
      const res = await fetch('/get_users', 'get', formValues)
      console.log(res.data.data)
      dispatch(authSlice.actions.setUsers(res.data))

    } catch (err) {
      console.log(err);
    }
    finally {
      
    }
  };
};


export default authSlice.reducer;
