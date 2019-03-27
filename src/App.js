import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import Content from './Components/Content.js';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Content />
      </div>
    );
  }
}

export default App;
