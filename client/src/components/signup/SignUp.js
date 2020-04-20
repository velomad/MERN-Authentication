import React from "react";
import { Field, reduxForm, formValues } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signUpAction } from "../../store/actions/authActions";

const SignUp = (props) => {
  // console.log(props.success)
  const { handleSubmit } = props;

  const formHandler = (formData) => {
    // call the action dispatcher
    props.signUpUser(formData);
    if (!props.error) {
      props.history.push("../login");
    }
  };

  return (
    <div className="container row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit(formHandler)}>
          <legend>Register With Us</legend>
          <div className="form-group mt-3"></div>
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Name</label>
            <fieldset>
              <Field
                component="input"
                type="text"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="name"
                placeholder="Enter Name"
                autoComplete="off"
              />
            </fieldset>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <fieldset>
              <Field
                component="input"
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </fieldset>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <fieldset>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                component="input"
                autoComplete="off"
              />
            </fieldset>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </form>
      </div>
      <div className="col container" style={{ textAlign: "center" }}>
        <h4>sign-up with</h4>
        <div>
          <button className="btn btn-danger mt-3">Google</button>
        </div>
        <div>
          <button className="btn btn-primary mt-3">Facebook</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.auth.signUpSuccess,
    error: state.auth.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (data) => dispatch(signUpAction(data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "signup" })
)(SignUp);
