import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Would You Rather</NavbarBrand>
        {props.authedUser && (
          <Fragment>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="add-question">
                    New Questions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Leader Board
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/logout">
                    Log Out
                  </NavLink>
                </NavItem>
                <NavItem style={{ paddingTop: "10px" }}>
                  {props.authedUser}
                </NavItem>
              </Nav>
            </Collapse>
          </Fragment>
        )}
      </Navbar>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Topnav));
