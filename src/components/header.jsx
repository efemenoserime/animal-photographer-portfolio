import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/Animal-Photographer-Logo-White.svg";

const Header = ({ siteTitle }) => (
  <Navbar
    collapseOnSelect
    variant="dark"
    expand="lg"
    style={{
      background: "rebeccapurple",
    }}
  >
    <Container>
      <Navbar.Brand>
        <Link style={{ color: "white", textDecoration: "none" }}>
          <img
            src={logo}
            alt={`${siteTitle} logo`}
            width="80px"
            className="mb-0 mr-1"
          />
          {siteTitle}{" "}
        </Link>
      </Navbar.Brand>
      <Toggler aria-controls="responsive-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="nav-link"
            to="/"
            activeStyle={{
              color: "rgba(255, 255, 255, .80)",
            }}
          >
            Home
          </Link>
          <Link className="nav-link" to="/gallery">
            Galerie
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

const Toggler = styled(Navbar.Toggle)`
  border: none;
  color: "white";

  &:focus,
  &:visited {
    border: none;
    outline: none;
  }
`;

export default Header;
