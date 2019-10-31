/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Switch.scss';

function Switch({ label, disabled }) {
  const [switchState, changeSwitchState] = useState(false);

  return (
    <div
      role="switch"
      aria-checked
      tabIndex={0}
      className="switch-container"
      onKeyDown={(e) => (+e.which === 13 ? changeSwitchState(!switchState) : null)}
      onClick={() => changeSwitchState(!switchState)}
    >

      {label ? <span>{label}</span> : null}
      <input
        className="switch-checkbox"
        id="switch"
        type="checkbox"
        checked={switchState}
        readOnly
      />
      <label
        className="switch-label"
        htmlFor="switch"
      >
        <span className="switch-button" />
      </label>
    </div>
  );
}

Switch.propTypes = {
  label: PropTypes.string,
};

Switch.defaultProps = {
  label: null,
};

export default Switch;
