import React, { Component } from 'react';
import './style/preferences.scss';

class Preferences extends Component {
  render() {
    return (
      <a className='button' href="#">
        <span>Preferences</span>
        <i className="icon icon-cog" />
      </a>
    );
  }
}

export default Preferences;
