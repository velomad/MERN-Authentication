import {
  AUTH_SIGNUP,
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT ,
  AUTH_REQUEST
} from "../actions/authActions";

const initialState = {
  isAuth: false,
  token: '',
  signUpSuccess: "",
  errorMessage: "",
  errorMessageLogin: "",
  loading:'loading...'
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      // change the state
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    case AUTH_REQUEST :
      return {
        ...state,
        isAuth:false,
        loading:true
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        token:action.payload,
        isAuth:false,
      }
    default:
      return state;
  }
};

export default authReducer;
