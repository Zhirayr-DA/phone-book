import React from 'react';
import PropTypes from 'prop-types';
import './styles/window.scss';

const window = ({ children, className, itemClass }) => {
  const parsedChildren = React.Children.map(children, (child) => (<div className={`window-row ${itemClass}`}>{child}</div>));
  return (
    <div className={`window row ${className}`}>
      {parsedChildren}
    </div>
  );
};

window.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  itemClass: PropTypes.string,
};

window.defaultProps = {
  className: '',
  itemClass: '',
};

export default window;
