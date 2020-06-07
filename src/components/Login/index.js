import React, { Component } from "react";
import { connect } from "react-redux";
import map from "lodash/map";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { setUser } from '../../actions/authedUser'

class Login extends Component {
  state = {
    userId: "",
  };

  handleChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.userId) {
        this.props.authedUser(this.state.userId);
        this.props.history.push('/')
    } else {
      alert("Please Select  User");
    }
  };

  render() {
    const { users } = this.props;
    const { userId } = this.state;
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3 style={{ textAlign: "center", marginTop: "25px" }}>
            Would You Rather
          </h3>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleSelect"></Label>
              <Input type="select" value={userId} onChange={this.handleChange}>
                <option value="">Please select User</option>
                {map(users, (user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Input>
              <Button
                style={{ marginTop: "15px" }}
                disabled={userId === ""}
                type="submit"
                color="info"
              >
                Submit
              </Button>{" "}
            </FormGroup>
          </form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authedUser: (id) => {
      dispatch(setUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
