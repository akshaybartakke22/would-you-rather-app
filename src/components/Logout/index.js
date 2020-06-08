import React, { Component } from "react";
import { Redirect, navigate } from "react-router-dom";
import { resetUser } from "../../actions/authedUser";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  componentWillUnmount = () => {
    console.log(this.props);
    const { history } = this.props;
    this.props.dispatch(resetUser());
  };

  render() {
    return (
      <div>
        <Redirect to="/" />
      </div>
    );
  }
}

export default withRouter(connect()(Logout));
