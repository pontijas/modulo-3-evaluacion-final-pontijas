import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

const CharacterList = () => {
  return (
    <div>
      <ul>
        <Character />
      </ul>
    </div>
  );
};

export default CharacterList;
