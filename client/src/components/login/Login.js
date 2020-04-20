import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { loginAction } from "../../store/actions/authActions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    props.loginUser(formData);
  };


  return (
    <div className="container">
      <form onSubmit={handleForm}>
        <legend>Login</legend>

        {/* success popup */}
        {props.success && (
          <div className="alert alert-dismissible alert-primary col-lg-6">
            <button type="button" class="close" data-dismiss="alert">
              &times;
            </button>
            <strong>{props.success}</strong>
          </div>
        )}

        <div className="form-group  mt-3"></div>
        <div className="form-group col-lg-6">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <fieldset>
            <input
              // component="input"
              onChange={handleEmailChange}
              value={email}
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </fieldset>
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="exampleInputPassword1">Password</label>
          <fieldset>
            <input
              // component="input"
              onChange={handlePasswordChange}
              value={password}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </fieldset>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.auth.signUpSuccess,
    error: state.auth.errorMessageLogin,
    authorized: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginAction(data)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
