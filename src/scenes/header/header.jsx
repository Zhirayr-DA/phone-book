import React, { Component } from 'react';
import Preferences from './scenes/preferences/Preferences';
import Profile from './scenes/profile/Profile';
import HeaderItem from './components/headerItem/HeaderItem';
import './styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header row">
        <div className="logo">
          <h1>Phonebook</h1>
        </div>
        <nav className="navigation">
          <HeaderItem url="#" title="Profile" iconName="profile" />
          <HeaderItem url="#" title="Preferences" iconName="cog" />
        </nav>
      </div>
    );
  }
}

export default Header;
