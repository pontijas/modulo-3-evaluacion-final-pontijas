import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filter from './Filter';
import Modal from './Modal';
import getDataFromApi from '../services/getDataFromApi';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (data) => {
    setNameFilter(data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    // boolean
    // console.log(character.name.toUpperCase().includes(nameFilter.toUpperCase()));
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  const renderModal = (props) => {
    const matchId = props.match.params.id;

    // console.log('holi match', props.match.params.id);
    // console.log('holi array', characters);

    const matchCharacter = characters.find((character) => {
      // console.log(charactersElement.id);
      return character.id === parseInt(matchId);
    });
    if (matchCharacter !== undefined) {
      // console.log('es un match', matchCharacter);
      return <Modal character={matchCharacter} />;
    }
  };

  return (
    <div className="App__container">
      <header className="header__container" id="header">
        <img src={logo} title="Rick y Morty" alt="Rick y Morty" className="header__logo"></img>
      </header>
      <main className="main__container">
        <Filter handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
        <Switch>
          <Route path="/character/:id" render={renderModal} />
        </Switch>
      </main>
      <footer className="footer__container">
        <a className="footer__btn" href="#header">
          go to top
        </a>
      </footer>
    </div>
  );
};

export default App;
