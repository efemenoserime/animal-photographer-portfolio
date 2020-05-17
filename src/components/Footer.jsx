import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Footer = ({ className, style }) => {
  return (
    <Foot style={{ background: "#814fb4", ...style }} className={className}>
      <Container className="pt-5 pb-5 text-light">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    </Foot>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

const Foot = styled.footer`
  background-color: "#814fb4";
  color: "#ffff33";
`;

export default Footer;
