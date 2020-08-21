import React, { Component } from 'react';
import './App.scss';

import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import Button from './components/Button'

class App extends Component{
  constructor(){
    super();

    this.state = {
      value: '',
      data: {}
    }

    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getUser() {
    console.log('get user', this.state.value)
    // Simple GET request using fetch
    // fetch(`https://api.github.com/users/${value}/repos`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ user: data }));
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App__logo">
          <Logo />
        </div>
        <div className="App__search">
          <div className="App__search__bar">
            <SearchBar
              placeholder="Digite o nome do usuário"
              onChange={this.handleChange}
              value={this.props.value}
            />
          </div>
          <div className="App__search__button">
            <Button text="Buscar" onClick={this.getUser}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
