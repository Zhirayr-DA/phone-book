import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ children }) => (
  <div className="menu-item">
    {children}
  </div>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MenuItem;
