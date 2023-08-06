import React, { ReactNode, useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";

const Register: React.FunctionComponent = () => {
  // const user = useSelector((state: any) => state.auth.user);
  const dispatch: Function = useDispatch();
  const initialState: any = {
    userName: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // alert("hello");
    dispatch(registerUser(values));
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <FontAwesomeIcon icon={faCircleUser} size="4x" />
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} size="xl" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                value={values.userName}
                name="userName"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock} size="xl" />
                </span>
              </div>
              <input
                type="text"
                value={values.password}
                className="form-control"
                onChange={handleChange}
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
          </form>
          <div className="social"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
