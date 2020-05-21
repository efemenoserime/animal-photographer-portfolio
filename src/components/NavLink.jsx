import React from "react";
import PropTypes from "prop-types";

import AniLink from "gatsby-plugin-transition-link/AniLink";

/**
 * Navigation link with transitions.
 * This component is based on "gatsby-plugin-transition-link/AniLink".
 * @param {string} to Path to navigate to
 * @param {string} className Class applied to NavLink
 * @param {string} style Inline styled for NavLink
 */
const NavLink = ({
  to,
  className,
  style,
  children,
  // activeStyle,
  ...otherProps
}) => {
  const isPartiallyActive = (pathname, to) => {
    // Ensure that home nav-link is only active
    // if pathname matches exactly home route "/"
    if (pathname !== "/" && to === "/") {
      return { className: "nav-link" };
    } else if (pathname.includes(to)) {
      return { className: "nav-link active" };
    }
  };

  return (
    <AniLink
      to={to}
      className={className}
      style={style}
      getProps={({ location }) => isPartiallyActive(location.pathname, to)}
      {...otherProps}
    >
      {" "}
      {children}{" "}
    </AniLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default NavLink;
