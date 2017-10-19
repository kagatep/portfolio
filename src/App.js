import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'; 
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Welcome />
        <Resume />
        <Contact />
      </div>
    );
  }
}


export default App;
