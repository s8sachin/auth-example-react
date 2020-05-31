import React from 'react';
import PropTypes from 'prop-types';

const FullHeightBackground = ({
  backgroundColor
}) => (
  <div style={{backgroundColor, top: 0, bottom: 0, right: 0, left:0, zIndex: -1, transition: 0.5}} className="position-absolute" />
);

FullHeightBackground.prototype = {
  width: PropTypes.any,
  height: PropTypes.any,
};

FullHeightBackground.defaultProps = {
  width: 'auto',
  height: '100%'
};

export default FullHeightBackground;
