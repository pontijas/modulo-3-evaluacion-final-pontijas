import React from 'react';
import image from '../images/error.jpg';
import '../stylesheets/FilterError.scss';

const FilterError = () => {
  return (
    <li className="warning__container">
      <img className="warning__img" src={image} alt="Not Found" />
      <p className="warning__text">Oops! The character you're looking for doesn't exist.</p>
    </li>
  );
};

export default FilterError;
