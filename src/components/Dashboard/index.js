import React, { Component } from "react";
import { connect } from "react-redux";
import Topnav from "../TopNavs";

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <div>
        <Topnav />
        dashboard
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
