import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const Modal = (props) => {
  console.log('recibo esto en Modal', props.character);

  return (
    <div className="modal__container">
      <div className="modal__header">
        <h2 className="modal__title">Name</h2>
        <Link to="/" className="modal__link">
          Go Back
        </Link>
      </div>
      <section className="modal__info">
        <img src="https://via.placeholder.com/200" alt="Character" title="Character image" />
        <ul>
          <li className="modal__list-item">specie: </li>
          <li className="modal__list-item">origin: </li>
          <li className="modal__list-item">status: </li>
          <li className="modal__list-item">episodes: </li>
        </ul>
      </section>
    </div>
  );
};

export default Modal;
