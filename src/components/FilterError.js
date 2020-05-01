import React from 'react';
import image from '../images/error.jpg';
import '../stylesheets/FilterError.scss';

const FilterError = () => {
  return (
    <li className="warning__container">
      <img className="warning__img" src={image} alt="Not Found" />
      <section className="warning__info">
        <p className="warning__text">
          Oops! It seems that there's no character matching with <small>"{}"</small>.
        </p>
      </section>
    </li>
  );
};

export default FilterError;
