import React from 'react';
import '../stylesheets/Filter.scss';

const FilterStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
    });
  };

  return (
    <form className="filter__container-select">
      <label className="filter__label-select">Filter by status</label>
      <select id="status" name="status" onChange={handleChange}>
        <option value="all">All</option>
        <option value="Dead">Dead</option>
        <option value="Alive">Alive</option>
      </select>
    </form>
  );
};

export default FilterStatus;
