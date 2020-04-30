import React from 'react';
import FilterName from './FilterName';
import FilterStatus from './FilterStatus';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  return (
    <section className="filters__container">
      <FilterName handleFilter={props.handleFilter} />
      <FilterStatus handleFilter={props.handleFilter} />
    </section>
  );
};

export default Filters;
