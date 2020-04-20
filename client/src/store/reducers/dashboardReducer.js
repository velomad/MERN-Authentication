import {
  GET_SECRET,
  GET_SECRET_ERROR,
  GET_SECRET_LOADING,
} from "../actions/dashboardActions";

const initialState = {
  secret: "",
  error: "",
  loading: true,
};

const dashboardReducer = (state = initialState, action) => {
  if (action.type === GET_SECRET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === GET_SECRET) {
    return {
      ...state,
      loading: false,
      secret: action.payload,
      error: "",
    };
  }
  if (action.type === GET_SECRET_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }else{
      return state
  }
};


export default dashboardReducer