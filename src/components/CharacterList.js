import React from 'react';
import Character from './Character';
import '../stylesheets/App.scss';

function CharacterList() {
  return (
    <div className="App">
      <ul>
        <Character />
      </ul>
    </div>
  );
}

export default CharacterList;
