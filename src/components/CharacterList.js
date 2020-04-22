import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

function CharacterList() {
  return (
    <div>
      <ul>
        <Character />
      </ul>
    </div>
  );
}

export default CharacterList;
