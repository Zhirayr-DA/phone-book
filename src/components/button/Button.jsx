import React from 'react';
import PropTypes from 'prop-types';

function Button({
  url, title, active, iconName, className, ...props
}) {
  return (
    <a
      {...props}
      href={url}
      className={`button ${active ? 'active' : ''} ${className}`}
    >
      {title}
      {
        iconName
          ? <i className={`icon icon-${iconName}`} />
          : null
      }
    </a>
  );
}

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
  iconName: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  url: '#',
  title: '',
  active: false,
  iconName: '',
  className: '',
};

export default Button;
