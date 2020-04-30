import React from 'react';
import FilterName from './FilterName';
import FilterStatus from './FilterStatus';
// import FilterRadio from './FilterRadio';
import '../stylesheets/Filter.scss';

const Filters = (props) => {
  return (
    <section className="filters__container">
      <FilterName handleFilter={props.handleFilter} />
      <FilterStatus handleFilter={props.handleFilter} />
      {/* <FilterRadio /> */}
    </section>
  );
};

export default Filters;
