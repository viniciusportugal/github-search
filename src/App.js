import React, { Component } from 'react';
import './App.scss';

import Avatar from './components/Avatar';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import Card from './components/Card';
import Repository from './components/Repository';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import GithubLogo from './assets/images/github.png';

class App extends Component{
  constructor(){
    super();

    this.state = {
      value: '',
      warningStatus: false,
      repos: [],
      loading: false,
      errorStatus: null
    }

    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.displayWarning = this.displayWarning.bind(this);
  }

  setInitialState() {
    this.setState({
      loading: true,
      errorStatus: null,
      value: '',
    });
  }

  getUser() {
    // setting initial state to prevent empty repo array
    this.setInitialState();

    //GET request using fetch
    fetch(`https://api.github.com/users/${this.state.value}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({
            errorStatus: response.status
          });
          return [];
        }
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

  displayWarning() {
    this.setState(prevState => ({
      warningStatus: !prevState.warningStatus
    })); 
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
            <>
              <div className="App__search">
                <div className="App__search__bar">
                  <SearchBar
                    placeholder="Digite o nome do usuário"
                    onChange={this.handleChange}
                    value={this.props.value}
                  />
                </div>
                <div className="App__search__button">
                  <Button
                    text="Buscar"
                    onClick={
                      this.state.value !== null
                      && this.state.value !== ''
                      ? this.getUser
                      : this.displayWarning
                    }
                    disabled={
                      this.state.value !== null
                      && this.state.value !== ''
                      ? ''
                      : 'disabled'
                    }
                  />
                </div>
              </div>
              {
                this.state.warningStatus ? (
                  <p className="App__search__warning">Você precisa digitar um nome de usuário.</p>
                ) : null
              }
            </>
          )
        }
        <div className="App__result">
          {
            this.state.errorStatus ? (
              <ErrorMessage error={this.state.errorStatus} />
            ) : (
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
                      <div className="App__result__repository">
                        <Repository
                          name={repo.name}
                          description={repo.description}
                          stars={repo.stargazers_count}
                          url={repo.html_url}
                        />
                      </div>
                    </Card>
                  </div>
                ))
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
