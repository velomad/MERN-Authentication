import dashboardApi from "../../api/dashboardApi";

export const GET_SECRET = "GET_SECRET";
export const GET_SECRET_LOADING = "GET_SECRET_LOADING";
export const GET_SECRET_ERROR = "GET_SECRET_ERROR";

export const getSecret = () => {
  return (dispatch) => {
      dispatch({type:GET_SECRET_LOADING})
    dashboardApi
      .get("/users/secret")
      .then((resp) => dispatch({ type: GET_SECRET, payload: resp.data.data }))
      .catch((err) =>
        dispatch({
          type: GET_SECRET_ERROR,
          payload: "Unable to get data. Try again.",
        })
      );
  };
};
