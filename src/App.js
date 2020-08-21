import React from 'react';
import './App.scss';

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="App__logo">
        <Logo />
      </div>
      <div className="App__search">
        <div className="App__search__bar">
          <SearchBar placeholder="Digite o nome do usuário" />
        </div>
        <div className="App__search__button">
          <Button text="Buscar" />
        </div>
      </div>
    </div>
  );
}

export default App;
