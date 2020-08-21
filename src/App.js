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
        <SearchBar placeholder="Digite o nome do usuário" />
        <Button text="Buscar" />
      </div>
    </div>
  );
}

export default App;
