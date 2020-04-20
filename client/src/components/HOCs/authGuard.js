import React, { Component } from "react";
import { connect } from "react-redux";

export default (OriginalComponent) => {
  class MixedComponent extends Component {
    checkAuth() {
      !this.props.isAuthenticated && !this.props.token
        && this.props.history.push("/") 
    }

    componentDidMount() {
      // whether the user is authenticated
      this.checkAuth();
    }

    componentDidUpdate() {
      // whether the user is authenticated
      this.checkAuth();
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
