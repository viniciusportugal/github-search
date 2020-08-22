import React, { Component } from 'react';
import './App.scss';

import Avatar from './components/Avatar'
import SearchBar from './components/SearchBar'
import Button from './components/Button'
import Card from './components/Card'
import Repository from './components/Repository'
import Loader from './components/Loader'

import GithubLogo from './assets/images/github.png'

class App extends Component{
  constructor(){
    super();

    this.state = {
      value: '',
      repos: [],
      loading: false
    }

    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getUser() {
    // setting loader
    this.setState({loading: true});
    //GET request using fetch
    fetch(`https://api.github.com/users/${this.state.value}/repos`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(result => {
        this.setState({
          loading: false,
          repos: result
        });
      })
      .catch(error => {
        console.log('error', error)
      });
  }
 
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App__logo">
          <Avatar src={GithubLogo} text="Github Search" textSize="large" textColor="white"/>
        </div>
        {
          this.state.loading ? (
            <Loader />
          ) : (
            <div className="App__search">
              <div className="App__search__bar">
                <SearchBar
                  placeholder="Digite o nome do usuário"
                  onChange={this.handleChange}
                  value={this.props.value}
                />
              </div>
              <div className="App__search__button">
                <Button text="Buscar" onClick={this.getUser} />
              </div>
            </div>
          )
        }
        <div className="App__result">
          {
            this.state.repos.map((repo) => (
              <div className="App__result__container" key={`key-${repo.name}`}>
                <Card>
                  <div className="App__result__avatar">
                    <Avatar
                      src={repo.owner.avatar_url}
                      text={repo.owner.login}
                      textSize="small"
                      textColor="grey"
                      rounded
                    />
                  </div>
                  <Repository
                    name={repo.name}
                    description={repo.description}
                    stars="6"
                    url={repo.html_url}
                  />
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
