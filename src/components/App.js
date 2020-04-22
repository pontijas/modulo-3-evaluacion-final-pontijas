import React from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import '../stylesheets/App.scss';

const App = () => {
  return (
    <div className="App">
      <Filter />
      <CharacterList />
    </div>
  );
};

export default App;
