import React from 'react';
import '../stylesheets/Filter.scss';

const FilterName = (props) => {
  const handleChange = (ev) => {
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

export default FilterName;
