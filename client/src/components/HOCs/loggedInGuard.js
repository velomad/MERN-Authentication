import React, { Component } from "react";
import { connect } from "react-redux";

export default (OriginalComponent) => {
  class MixedComponent extends Component {


    preventLogin(){
      this.props.isAuthenticated && this.props.token
        && this.props.history.push("/dashboard") 
    }

    componentDidMount() {
      // whether the user is authenticated
      this.preventLogin()
    }

    componentDidUpdate() {
      // whether the user is authenticated
      this.preventLogin()
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuth,
      token: state.auth.token,
    };
  };

  return connect(mapStateToProps)(MixedComponent);
};
