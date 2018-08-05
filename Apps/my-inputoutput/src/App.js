import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    userName: 'tom'
  };

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          UserInput and UserOutput Project
        </p>
        <UserInput
          userName={this.state.userName}
          changed={this.userNameChangeHandler}
        />
        <UserOutput 
          userName={this.state.userName}
        
        />

      </div>
    );
  }
}

export default App;
