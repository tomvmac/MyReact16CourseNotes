import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ValidationComponent';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {

  state = {
    userName: ''
  };

  userNameChangeHandler = (event) => {
    const userName = event.target.value;

    this.setState({
      userName: userName
    })

  } 

  userNameCharacterHandler = (event, myChar, charIndex) => {
    // console.log("Enter userNameCharacterHandler");
    // console.log(event.target.value);
    // console.log(myChar);
    // console.log(charIndex);

    const userNameChars = [...this.state.userName];
    const removeIndex = charIndex;

    // Find value
    const newUserNameChars = [...userNameChars.slice(0, removeIndex), ...userNameChars.slice(removeIndex+1, userNameChars.length)];
    let newUserName = newUserNameChars.join('');
        
    console.log(newUserNameChars);
    console.log(newUserName);

    // Update state to remove character from 
    this.setState({
      userName: newUserName
    })

  }


  render() {
    let userNameChars = this.state.userName.split("");
    let charComponents = (
      <div>
        {
          userNameChars.map((userNameChar, index) => {
              return <CharComponent
                  currentChar={userNameChar}
                  click={(event) => this.userNameCharacterHandler(event, userNameChar, index)}
                  key={index}
              />
          })
        }
      </div>  
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Change User Name and see what happens.
        </p>
        <input 
          type="text" 
          id="userName" 
          placeholder="Enter User Name" 
          onChange ={this.userNameChangeHandler}
          value={this.state.userName}
          />
        <ValidationComponent 
            userName={this.state.userName}
            userNameLength={this.state.userName.length}
        />
        {charComponents}
      </div>
    );
  }
}

export default App;
