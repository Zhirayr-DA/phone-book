import React from 'react';
import PropTypes from 'prop-types';
import './style/ContactRow.scss';

function ContactRow({ name, number }) {
  return (
    <div className="contact-row button">
      <h3 className="contact-name">{name}</h3>
      <p className="contact-number">{number}</p>
    </div>
  );
}

ContactRow.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactRow;
