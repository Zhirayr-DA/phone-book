import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Window from '../../../../components/window/Window';


function HeaderItem({
  url, title, iconName, menu,
}) {
  const [activeState, changeActiveState] = useState(false);
  return (
    <a
      href={url}
      className="button header-item"
      onClick={(e) => {
        changeActiveState(true);
      }}
    >
      {title}
      <i className={`icon icon-${iconName}`} />
      {
        activeState ? (
          <Window className="dropdown" tabIndex={0} onBlur={() => changeActiveState(false)}>
            {menu}
          </Window>
        )
          : null
      }
    </a>
  );
}
HeaderItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  menu: PropTypes.element,
};
HeaderItem.defaultProps = {
  menu: null,
};

export default HeaderItem;
