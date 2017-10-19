import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'; 
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Welcome />
        <Resume />
      </div>
    );
  }
}


export default App;
