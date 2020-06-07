import React, { Component } from "react";
import Logout from "../../components/Logout";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
      const { authedUser } = this.props;
    return (
      <div>
            <Logout
                loginUser= {authedUser}
                handleClick={this.handleClick} />
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
