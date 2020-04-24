import React from 'react';
import '../stylesheets/App.scss';

const Modal = () => {
  return (
    <section className="modal__card">
      <img src="https://via.placeholder.com/250" alt="Character" title="Character image" />
      <ul className="modal__info">
        <h2>Name</h2>
        <li>species</li>
        <li>origin</li>
        <li>status</li>
        <li>episodes</li>
      </ul>
    </section>
  );
};

export default Modal;
