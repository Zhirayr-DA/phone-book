import React from 'react';
import PropTypes from 'prop-types';
import './styles/Menu.scss';

const Menu = ({ children }) => (
  <div className="menu">
    {children}
  </div>
);

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const MenuItem = ({ children, button }) => (
  <div className={`menu-item ${button ? 'button' : ''}`}>
    {children}
  </div>
);

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  button: PropTypes.bool,
};

MenuItem.defaultProps = {
  button: false,
};

export default Menu;
export { MenuItem };
