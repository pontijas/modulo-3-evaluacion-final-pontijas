import React from 'react';
import '../stylesheets/Filter.scss';

const FilterRadio = () => {
  return (
    <form className="filter__container-radio">
      <label className="filter__label-radio-1">
        <input id="origin-1" type="radio" name="origin"></input>
        Earth
      </label>
      <label className="filter__label-radio-2">
        <input id="origin-2" type="radio" name="origin"></input>
        Else
      </label>
    </form>
  );
};

export default FilterRadio;
