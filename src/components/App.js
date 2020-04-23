import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDataFromApi';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  // console.log('name filter', nameFilter);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (data) => {
    setNameFilter(data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    // console.log(character.name.includes(nameFilter));

    return character.name.includes(nameFilter);
  });

  return (
    <div className="App__container">
      <header className="header__container">
        <img src={logo} alt="Rick y Morty" className="header__logo"></img>
      </header>
      <main>
        <Filter handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
};

export default App;
