import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "react-bootstrap";

/**
 * Simple footer component
 * @param {String} className Set footer classes trough className prop
 * @param {Object} style Inline styles applied to footer component
 * @author Efeme Noserime
 */
const Footer = ({ className, style }) => {
  return (
    <Foot style={{ background: "#814fb4", ...style }} className={className}>
      <Container className="pt-5 pb-5 text-light d-flex justify-content-center">
        © {new Date().getFullYear()}, Built by{"  "}
        <FooterLink target="_blank" href="https://www.efeme-noserime.me">
          Efeme Noserime
        </FooterLink>
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

const FooterLink = styled.a`
  color: #f3f3f3 !important;
  font-weight: 600;
  text-decoration: none;

  margin-left: 0.45rem;

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #fff;
  }
`;

export default Footer;
