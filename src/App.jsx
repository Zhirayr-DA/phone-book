import React from 'react';
import './styles/index.scss';
import Header from './scenes/header/header';
import ContactsList from './scenes/contactsList/ContactsList';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsList/>
    </div>
  );
}

export default App;
