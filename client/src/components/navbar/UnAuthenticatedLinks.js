import React from "react";
import {Link} from 'react-router-dom';


const UnAuthenticatedLinks = () => {
  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/sign-up">
            Sign-up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UnAuthenticatedLinks;
