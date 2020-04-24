import React from 'react';
import '../stylesheets/App.scss';

const Character = (props) => {
  return (
    <section className="card__container">
      <img src={props.character.image} alt={`Imagen de ${props.character.name}`} title={`Imagen de ${props.character.name}`} width="160px"></img>
      <small className="card__info">
        <h2>{props.character.name}</h2>
        <h3>{props.character.species}</h3>
      </small>
    </section>
  );
};

export default Character;
