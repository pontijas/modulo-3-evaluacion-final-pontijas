import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const Modal = (props) => {
  console.log('recibo esto en Modal', props.character.id);

  return (
    <div className="modal__container">
      <div className="modal__header">
        <Link to="/" className="modal__link">
          Go Back
        </Link>
      </div>
      <section className="modal__info">
        <img src={props.character.image} alt={`Imagen de ${props.character.name}`} title={`Imagen de ${props.character.name}`} className="modal__img" />
        <ul className="modal__list">
          <h2 className="modal__title">{props.character.name}</h2>
          <li className="modal__list-item">specie: {props.character.species}</li>
          <li className="modal__list-item">origin: {props.character.origin}</li>
          <li className="modal__list-item">status: {props.character.status}</li>
          <li className="modal__list-item">episodes: {props.character.episodes}</li>
        </ul>
      </section>
    </div>
  );
};

export default Modal;
