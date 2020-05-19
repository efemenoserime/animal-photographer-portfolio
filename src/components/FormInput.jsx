import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

/**
 * Render FormInput component (Bootstrap FormControl <https://react-bootstrap.github.io/components/forms/#form-control-props>)
 * @param {("text"|"email"|"password")} type Specifies input type that should be rendered. If none provided, fallback to text input.
 * @param {String} label Defines label text for appropriate FormControl. If none provided, no label will be rendered.
 * @param {string} name Name for form input component
 * @author Efeme Noserime <noserimeefeme@gmail.com>
 */
function FormInput({ type, label, name }) {
  return (
    <FormGroup>
      {/* Only render FormLabel if label was specified */}
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      {/* Fallback to 'text' as input type if none specified */}
      <FormControl name={name} type={type ? type : "text"}></FormControl>
    </FormGroup>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default FormInput;
