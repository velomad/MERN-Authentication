import Axios from "axios";

export const AUTH_SIGNUP = "AUTH_SIGNUP";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_REQUEST = "AUTH_REQUEST";

export const signUpAction = (data) => {
  // 1.use data to send it over HTTP req to our backend=====================
  // 2.take backend resp that user successfully ceated an account=================

  return (dispatch) => {
    Axios.post("http://localhost:5000/users/signup", data)
      .then((resp) => {
        dispatch({ type: AUTH_SIGNUP, payload: resp.data.success });
      })
      .catch((err) => {
        dispatch({ type: AUTH_ERROR, payload: err });
      });
  };
};

export const loginAction = (data) => {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST, payload: "" });
    Axios.post("http://localhost:5000/users/signin", data)
      .then((resp) => {
        console.log(resp)
        dispatch({ type: AUTH_LOGIN, payload: resp.data.token });
        localStorage.setItem("Token", resp.data.token);
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: AUTH_LOGIN_ERROR, payload: err.error });
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("Token");
    dispatch({ type: AUTH_LOGOUT, payload: "" });
  };
};

