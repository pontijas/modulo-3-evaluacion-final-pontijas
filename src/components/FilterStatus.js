import React from 'react';
import '../stylesheets/FilterStatus.scss';

const FilterStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
    });
  };

  return (
    <form className="filter__container">
      <label className="filter__label">Filter by status</label>
      <select id="status" name="status" onChange={handleChange} className="filter__input-select">
        <option value="all" className="filter__option">
          All
        </option>
        <option value="Dead" className="filter__option">
          Dead
        </option>
        <option value="Alive" className="filter__option">
          Alive
        </option>
      </select>
    </form>
  );
};

export default FilterStatus;
