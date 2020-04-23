import React, { useEffect } from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDataFromApi';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';

const App = () => {
  useEffect(() => {
    getDataFromApi().then((data) => console.log('data', data));
  });
  return (
    <div className="App__container">
      <header className="header__container">
        <img src={logo} alt="Rick y Morty" className="header__logo"></img>
      </header>
      <main>
        <Filter />
        <CharacterList />
      </main>
    </div>
  );
};

export default App;
