import React from 'react';
import PropTypes from 'prop-types';
import './styles/window.scss';

const window = ({ children, className }) => {
  const parsedChildren = React.Children.map(children, (child) => (<div className={`window-row ${className}`}>{child}</div>));
  return (
    <div className="window">
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
};

window.defaultProps = {
  className: '',
};

export default window;
