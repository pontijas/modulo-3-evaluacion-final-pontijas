import React from 'react';
import Character from './Character';
import FilterError from './FilterError';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  const charactersInfo = props.characters.map((character) => {
    return (
      <li key={character.id} className="list__item">
        <Character character={character} />
      </li>
    );
  });

  return (
    <div>
      <ul className="list__container">{charactersInfo}</ul>
      <FilterError />
    </div>
  );
};

export default CharacterList;
