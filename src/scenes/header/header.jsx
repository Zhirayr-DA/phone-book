import React from 'react';
import HeaderItem from './components/headerItem/HeaderItem';
import './styles/header.scss';
import Window from '../../components/window/Window';

function Header() {
  return (
    <div className="header row">
      <div className="logo">
        <h1>Phonebook</h1>
      </div>
      <nav className="navigation">
        <HeaderItem url="#" title="Profile" iconName="profile" />
        <HeaderItem url="#" title="Preferences" iconName="cog" />
      </nav>
      <Window>
        <p className='button'>Just a window</p>
      </Window>
    </div>
  );
}

export default Header;
