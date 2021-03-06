import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <div className="modal__background">
      <div className="modal__dialog">
        <section className="modal__container">
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
        </section>
      </div>
    </div>
  );
};

export default CharacterDetail;
