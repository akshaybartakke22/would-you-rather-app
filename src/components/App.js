import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Login from "../components/Login";
import Dashboard from "./Dashboard";
import Logout from './Logout';

class App extends Component {
  componentDidMount() {
    console.log('in app')
    this.props.handleInitialData();
  }
  render() {
    const { notLoggedIn } = this.props;
    return (
      <Router>
        <div className="main-container">
          {notLoggedIn ? (
            <Route path="/" exact component={Login} />
          ) : (
            <Fragment>
              <Route path="/" exact component={Dashboard} />
              <Route path="/logout" component={Logout} />
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: Array.isArray(authedUser),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
