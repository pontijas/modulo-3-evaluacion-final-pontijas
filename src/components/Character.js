import React from 'react';
import '../stylesheets/App.scss';

const Character = () => {
  return (
    <section className="card__container">
      <img src="https://via.placeholder.com/150" alt="character"></img>
      <small className="card__info">
        <h2>name</h2>
        <h3>species</h3>
      </small>
    </section>
  );
};

export default Character;
