import React, { useState, useEffect } from 'react';
import ContactRow from './components/contactRow/ContactRow';

function ContactsList() {
  const [contacts, updateContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/contacts')
      .then((data) => data.json())
      .then((contactsData) => updateContacts(contactsData));
  });
  return (
    <div>
      {contacts.map((contact) => (
        <ContactRow key={contact.number} {...contact} />
      ))}
    </div>
  );
}

export default ContactsList;
