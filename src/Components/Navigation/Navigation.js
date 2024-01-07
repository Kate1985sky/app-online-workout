import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export const Navigation = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav direction="horizontal" gap={4}>
            <Nav.Link as={NavLink} to="/about-us">
              About us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/how to start">
              How To Start
            </Nav.Link>
            <Nav.Link as={NavLink} to="/feautures">
              Feautures
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/feedback">
              Feedback
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  );
};
