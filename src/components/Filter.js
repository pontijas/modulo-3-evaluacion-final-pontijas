import React from 'react';
import '../stylesheets/App.scss';

const Filter = (props) => {
  // console.log('recibo esto en filter', props.handleFilter);
  const handleChange = (ev) => {
    console.log(ev.type, ev.target.value);
    props.handleFilter();
  };

  return (
    <form className="filter__container">
      <label className="filter__label">Filtrar por nombre</label>
      <input type="text" className="filter__input" placeholder="Nombre del personaje" onChange={handleChange}></input>
    </form>
  );
};

export default Filter;
