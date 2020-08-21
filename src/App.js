import React from 'react';
import './App.scss';

import Button from './components/Button'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <div className="App__search">
        <SearchBar placeholder="Digite o nome do usuário" />
        <Button text="Buscar" />
      </div>
    </div>
  );
}

export default App;
