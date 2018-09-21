import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import axios from 'axios';

class App extends Component {
  constructor()
  {
    super()
    this.state ={
        requestFailed : false,
        API_KEY : 'a89bc92bbb3f720014eec30c42605292',
        city:'',
        country:'',
      }
    }
    onClick(){

      
    }
  render() {
    return (
      <div className="App">
        <h1>Adopt Me!</h1>
        <Form />

      </div>
    );
  }
}

export default App;
