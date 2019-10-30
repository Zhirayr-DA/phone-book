import React, { useState } from 'react';
import PropTypes from 'prop-types';


function HeaderItem({
  url, title, iconName, menu,
}) {
  const [activeState, changeActiveState] = useState(false);
  return (
    <a
      href={url}
      className="button header-item"
      onClick={(e) => {
        e.preventDefault();
        changeActiveState(!activeState);
      }}
      // onBlur={() => changeActiveState(false)}
    >
      {title}
      <i className={`icon icon-${iconName}`} />
      {activeState ? menu : null}
    </a>
  );
}
HeaderItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  menu: PropTypes.node,
};
HeaderItem.defaultProps = {
  menu: null,
};

export default HeaderItem;
