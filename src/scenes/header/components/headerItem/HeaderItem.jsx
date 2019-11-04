import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Window from '../../../../components/window/Window';
import useOutsideClickDetector
  from '../../../../Hooks/useOutesideClickDetecktor/useOutsideClickDetector';
import Button from '../../../../components/button/Button';


function HeaderItem({
  url, title, iconName, menu, type,
}) {
  const [activeState, changeActiveState] = useState(false);
  const refContainer = useRef(menu);
  const handleOutsideClick = () => {
    changeActiveState(false);
  };
  useOutsideClickDetector(refContainer, handleOutsideClick);


  return (
    <div className="header-item-container">
      <Button
        active={activeState}
        className="header-item"
        url={url}
        onClick={() => {
          changeActiveState(true);
        }}
        iconName={iconName}
        title={title}
      />
      {
        activeState
          ? (
            <Window className={type} setRef={refContainer}>
              {menu}
            </Window>
          )
          : null
      }
    </div>
  );
}
HeaderItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  menu: PropTypes.element,
  type: PropTypes.string,
};
HeaderItem.defaultProps = {
  menu: null,
  type: 'dropdown',
};

export default HeaderItem;
