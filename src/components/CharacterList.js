import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

const CharacterList = (props) => {
  console.log('recibo esto', props.characters);

  const charactersInfo = props.characters.map((character, index) => {
    return (
      <li key={index} className="list__item">
        <Character />
      </li>
    );
  });

  return (
    <div>
      <ul className="list__container">
        {charactersInfo}
        {/* <Character /> */}
      </ul>
    </div>
  );
};

export default CharacterList;
