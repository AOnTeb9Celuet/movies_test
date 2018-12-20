import React from "react";
import { Navbar, Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import "./Header.css";
import { MyAccount } from "./my-account/MyAccount";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe);

export const Header = () => {
  return (
    <header>
      <Navbar
        fixed = 'top'
        light
        className="justify-content-start no-padding header-style"
        style={{ height: 80 }}
      >
        <Container fluid>
          <Row
            noGutters
            className="position-relative w-100 align-items-center my-acc-style"
          >
            <Col className="d-flex justify-content-start">
              <Nav className="x-auto" navbar>
                <NavItem className="d-flex align-items-center">
                  <NavLink href="/" className="no-padding">
                    <div className="header-logo">
                      <FontAwesomeIcon icon="globe" className="globe" /> Movies
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-end">
              <MyAccount />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};
