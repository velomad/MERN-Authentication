import React from "react";
import AuthenticatedLinks from "./AuthenticatedLinks";
import UnAuthenticatedLinks from "./UnAuthenticatedLinks";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          AuthMaster
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          {props.isAuthorized && <AuthenticatedLinks />}
          {!props.isAuthorized && <UnAuthenticatedLinks />}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(NavBar);
