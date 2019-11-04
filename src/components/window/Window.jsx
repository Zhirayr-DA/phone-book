import React from 'react';
import PropTypes from 'prop-types';
import './styles/window.scss';

const window = ({
  children, className, itemClass, setRef,
}) => {
  const parsedChildren = React.Children.map(children, (child) => (<div className={`window-row${itemClass}`}>{child}</div>));
  return (
    <div className={`window-container ${className}`}>
      <div ref={setRef} className="window">
        {parsedChildren}
      </div>
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
  setRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    PropTypes.shape({ current: PropTypes.object }),
  ]),
};

window.defaultProps = {
  className: '',
  itemClass: '',
  setRef: null,
};

export default window;
