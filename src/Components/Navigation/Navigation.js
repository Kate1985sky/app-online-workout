import React from "react";
import {Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {Logo} from "../Logo/Logo";
import styles from "./Navigation.module.css"

export  const Navigation = () => {


  return (
    <Navbar expand="xl">
      <Container>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.nav}>
              <Nav.Link className="text-white pe-3" as={NavLink} to="/about-us">
                About us
              </Nav.Link>
              <Nav.Link
                className="text-white pe-3"
                as={NavLink}
                to="/how to start"
              >
                How To Start
              </Nav.Link>
              <Nav.Link className="text-white pe-3" as={NavLink} to="/feautures">
                Feautures
              </Nav.Link>
              <Nav.Link className="text-white pe-3" as={NavLink} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link className="text-white pe-3" as={NavLink} to="/feedback">
                Feedback
              </Nav.Link>
              <Nav.Link className="text-white pe-3" as={NavLink} to="/faq">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
