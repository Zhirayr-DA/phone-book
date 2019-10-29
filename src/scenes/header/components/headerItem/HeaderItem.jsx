import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HeaderItem({ url, title, iconName }) {
  return (
    <a href={url} className="button header-item">
      {title}
      <i className={`icon icon-${iconName}`} />
    </a>
  );
}
HeaderItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default HeaderItem;
