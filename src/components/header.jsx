import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/Animal-Photographer-Logo-White.svg";
import NavLink from "./NavLink";

const Header = ({ siteTitle }) => {
  return (
    <Navbar
      id="main-nav"
      collapseOnSelect
      variant="dark"
      expand="lg"
      style={{
        background: "rebeccapurple",
      }}
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            className="font-italic"
            style={{ color: "white" }}
            to="/"
            paintDrip
            duration={1.5}
            hex="#A393BF"
          >
            <img
              src={logo}
              alt={`${siteTitle} logo`}
              width="60px"
              className="mb-0 mr-1"
            />

            <span id="site-title">{siteTitle}</span>
          </NavLink>
        </Navbar.Brand>
        <Toggler
          aria-controls="responsive-navbar-nav"
          bg="#DABFFF"
          className="ml-auto"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              className="nav-link"
              to="/"
              paintDrip
              hex="#3D314A"
              duration={1.5}
              activeStyle={{
                color: "rgba(255, 255, 255, .95)",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/gallery"
              hex="#3D314A"
              paintDrip
              duration={1.5}
              activeStyle={{
                color: "rgba(255, 255, 255, .95)",
              }}
            >
              Galerie
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

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
