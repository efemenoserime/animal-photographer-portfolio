/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import "../styles/layout.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faPhone,
  faEnvelope,
  faLocationArrow,
  faAt,
);

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto, Ubuntu, 'Segoe UI', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: Rosario, Montserrat, Verdana, sans-serif;
    font-weight: bold;
  }

  h1 {
    font-size: 54.93px;
    line-height: 67px;
  }
  h2 {
    font-size: 43.95px;
    line-height: 53px;
  }
  h3 {
    font-size: 35.16px;
    line-height: 43px;
  }
  h4 {
    font-size: 28.13px;
    line-height: 34px;
  }
  h5 {
    font-size: 22.5px;
    line-height: 27px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }

  a:hover  {
    color: #11161a;

  }

  a {
    color: #4B5864;
    transition: all .3s ease-in-out;
  }

  a, a:hover, a:active, a:focus {
    text-decoration: none;
    outline: none;
  }

  body.modal-open {
    padding-right: 0 !important;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={{ fontFamily: "Rosarion, 'Segoe UI', Verdana, sans-serif" }}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
