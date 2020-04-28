import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filter from './Filter';
import FilterSelect from './FilterSelect';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';
import FilterRadio from './FilterRadio';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      console.log(character.status, statusFilter);
      if (statusFilter === 'all') {
        return true;
      } else {
        return character.status === statusFilter;
      }
    });

  const renderModal = (props) => {
    const matchId = props.match.params.id;
    const matchCharacter = characters.find((character) => {
      return character.id === parseInt(matchId);
    });
    if (matchCharacter !== undefined) {
      return <CharacterDetail character={matchCharacter} />;
    }
  };

  return (
    <div>
      <div className="App__container">
        <header className="header__container" id="header">
          <img src={logo} title="Rick y Morty" alt="Rick y Morty" className="header__logo"></img>
        </header>
        <main className="main__container">
          <Filter handleFilter={handleFilter} />
          <FilterSelect handleFilter={handleFilter} />
          <FilterRadio />
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
    </div>
  );
};

export default App;
