/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-typos */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="container-post">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.PropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
