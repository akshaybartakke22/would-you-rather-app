import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Topnav from "../TopNavs";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";
import { handleAddNewQuestion } from "../../actions/shared";
import { Redirect } from "react-router-dom";

class AddNewQuestion extends Component {
  state = {
    redirect: false,
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOneChangeEvent = (event) => {
    event.preventDefault();
    this.setState({
      optionOne: event.target.value,
    });
  };

  handleOptionTwoChangeEvent = (event) => {
    event.preventDefault();
    this.setState({
      optionTwo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.addNewQuestion(optionOne, optionTwo);
    this.setState({ redirect: true });
  };

  render() {
    // to redirect home page
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const { optionOne, optionTwo } = this.state;
    return (
      <Fragment>
        <Topnav />

        <Row style={{ marginTop: "20px" }}>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody>
                <CardTitle>Would You Rather</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="optionOne">Option One</Label>
                    <Input
                      onChange={this.handleOptionOneChangeEvent}
                      type="text"
                      placeholder="Option One"
                      value={optionOne}
                      name="optionOne"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="optionTwo">Option Two</Label>
                    <Input
                      onChange={this.handleOptionTwoChangeEvent}
                      type="text"
                      placeholder="Option Two"
                      value={optionTwo}
                      name="optionTwo"
                    />
                  </FormGroup>
                  <Button disabled={optionOne === "" || optionTwo === ""}>
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddNewQuestion(optionOne, optionTwo));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNewQuestion);
