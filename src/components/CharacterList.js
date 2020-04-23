import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

const CharacterList = (props) => {
  console.log('recibo esto', props.characters);

  const charactersInfo = props.characters.map((character) => {
    console.log('ei');

    return 123;
  });

  return (
    <div>
      <ul>
        <Character />
      </ul>
    </div>
  );
};

export default CharacterList;
