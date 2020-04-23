import React from 'react';
import '../stylesheets/App.scss';

const Filter = () => {
  return (
    <form className="filter__container">
      <label className="filter__label">Filtrar por nombre</label>
      <input type="text" className="filter__input" placeholder="nombre del personaje"></input>
    </form>
  );
};

export default Filter;
