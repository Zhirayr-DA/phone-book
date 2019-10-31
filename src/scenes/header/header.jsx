import React from 'react';
import HeaderItem from './components/headerItem/HeaderItem';
import Menu, { MenuItem } from '../../components/menu/Menu';
import './styles/header.scss';
import Switch from '../../components/switch/Switch';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Phonebook</h1>
      </div>
      <nav className="navigation">
        <HeaderItem url="#" title="Profile" iconName="user" />
        <HeaderItem
          url="#"
          title="Preferences"
          iconName="cog"
          menu={(
            <Menu>
              <MenuItem button><Switch label="Dark Theme" /></MenuItem>
              <MenuItem button><Switch label="Compact mode" /></MenuItem>
            </Menu>
          )}
        />
      </nav>
    </div>
  );
}

export default Header;
