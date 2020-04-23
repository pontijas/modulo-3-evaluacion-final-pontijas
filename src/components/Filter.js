import React from 'react';
import '../stylesheets/App.scss';

const Filter = () => {
  const handleChange = (ev) => {
    console.log(ev.type, ev.target.value);
  };

  return (
    <form className="filter__container">
      <label className="filter__label">Filtrar por nombre</label>
      <input type="text" className="filter__input" placeholder="Nombre del personaje" onChange={handleChange}></input>
    </form>
  );
};

export default Filter;
