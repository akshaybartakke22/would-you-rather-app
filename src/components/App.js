import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Login from "../components/Login";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
    console.log(this.props);
  }
  render() {
    const { notLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <div className="main-container">
            {!notLoggedIn ? (
              <Route path="/" exact component={Login} />
            ) : (
              <Route path="/" component={Dashboard} />
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
