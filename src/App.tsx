import * as React from 'react';
import './App.css';
import Form from './Form';
import { ComponentState } from './interfaces';

class App extends React.Component<{}, ComponentState> {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        age: 0
      }
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.displayUserInfo = this.displayUserInfo.bind(this);
  }

  changeHandler(e: any) {
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({ person });
  }

  displayUserInfo() {
    alert('You first name is ' +  this.state.person.firstName);
  }

  render() {
    return (
      <div className="App">
        <Form 
        displayUserInfo={this.displayUserInfo} 
        changeHandler={this.changeHandler} 
        person={this.state.person} />
      </div>
    );
  }
}

export default App;
