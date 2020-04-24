import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const Character = (props) => {
  // console.log('recibo esto en caracter', props.character.id);

  return (
    <Link to={`/character/${props.character.id}`} className="card__link">
      <section className="card__container">
        <img src={props.character.image} alt={`Imagen de ${props.character.name}`} title={`Imagen de ${props.character.name}`} className="card__img"></img>
        <section className="card__info">
          <h3>{props.character.name}</h3>
          <p>{props.character.species}</p>
        </section>
      </section>
    </Link>
  );
};

export default Character;
