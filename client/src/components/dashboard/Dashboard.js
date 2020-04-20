import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSecret } from "../../store/actions/dashboardActions";

const Dashboard = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="container">
      <h3>Welcome to Dashboard</h3>
      {props.loadingData ? 'loading...' : <p>{props.secretData}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    secretData: state.dashboard.secret,
    loadingData: state.dashboard.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getSecret()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
