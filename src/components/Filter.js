import React from 'react';
import '../stylesheets/App.scss';

const Filter = (props) => {
  // console.log('recibo esto en filter', props.handleFilter);
  const handleChange = (ev) => {
    // console.log(ev.type, ev.target.value);
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <form className="filter__container">
      <label className="filter__label">Filter by name</label>
      <input type="text" className="filter__input" placeholder="Character name" onChange={handleChange}></input>
    </form>
  );
};

export default Filter;
