import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutAction } from "../../store/actions/authActions";


const AuthenticatedLinks = (props) => {

  const logout = () => {
    props.logoutUser()
  }
  

  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return{
    logoutUser: ()=> dispatch(logoutAction())
  }
}

export default connect(null, mapDispatchToProps)(AuthenticatedLinks);
