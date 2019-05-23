/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
