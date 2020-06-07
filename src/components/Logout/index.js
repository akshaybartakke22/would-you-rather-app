import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { resetUser } from "../../actions/authedUser";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  handleClick = () => {
    // const { handleClick, loginUser, authedUser } = this.props;
    console.log(this.props);
      this.props.dispatch(resetUser());
      this.props.history.push('/')
  };

  render() {
    // const { handleClick , loginUser } = this.props;
    let buttonStyle = {
      margin: "10px 10px 10px 0",
      backgroundColor: "#ccc",
    };
    return (
      <div>
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.handleClick}
        >
          Log Out
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authedUser: (id) => {
      dispatch(resetUser(id));
    },
  };
}

export default withRouter(connect(mapDispatchToProps)(Logout));
