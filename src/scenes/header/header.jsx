import React from 'react';
import HeaderItem from './components/headerItem/HeaderItem';
import Window from '../../components/window/Window';
import Menu, { MenuItem } from '../../components/menu/Menu';
import './styles/header.scss';

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
            <Window className="dropdown">
              <Menu>
                <MenuItem button><p>Dark theme</p></MenuItem>
                <MenuItem button><p>Compact mode</p></MenuItem>
              </Menu>
            </Window>
          )}
        />
      </nav>
    </div>
  );
}

export default Header;
