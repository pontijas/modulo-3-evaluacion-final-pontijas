import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

const CharacterList = (props) => {
  console.log('recibo esto', props.characters);

  const charactersInfo = props.characters.map((character, index) => {
    console.log('ei', index);

    return <li key={index}>123</li>;
  });

  return (
    <div>
      <ul>
        {charactersInfo}
        <Character />
      </ul>
    </div>
  );
};

export default CharacterList;
