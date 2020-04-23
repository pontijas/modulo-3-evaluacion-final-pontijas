import React from 'react';
import '../stylesheets/App.scss';

const Character = () => {
  return (
    <section className="Card__container">
      <img src="https://via.placeholder.com/150" alt="character"></img>
      <h2>name</h2>
      <small>species</small>
    </section>
  );
};

export default Character;
