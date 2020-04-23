import React from 'react';
import '../stylesheets/App.scss';

const Character = (props) => {
  console.log('recibo esto en Character', props.character.name);

  return (
    <section className="card__container">
      <img src={props.character.image} alt="character" height="150px"></img>
      <small className="card__info">
        <h2>{props.character.name}</h2>
        <h3>{props.character.species}</h3>
      </small>
    </section>
  );
};

export default Character;
