import React from 'react';
import Character from './Character';
import FilterError from './FilterError';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  console.log('props', props.characters);

  const charactersInfo = props.characters.map((character) => {
    return (
      <li key={character.id} className="list__item">
        <Character character={character} />
      </li>
    );
  });

  if (props.characters.length === 0) {
    return <FilterError />;
  }

  console.log('character info', charactersInfo);

  return (
    <div>
      <ul className="list__container">{charactersInfo}</ul>
    </div>
  );
};

export default CharacterList;
