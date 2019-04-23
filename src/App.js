import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './pages/MainView';
import { lightMasterColor, masterColor } from './appConstant';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
class App extends Component {
  render() {
    return (
      <div className="App" css={{backgroundImage: `linear-gradient(to bottom right, ${lightMasterColor}, ${masterColor})`, color: 'white'}}>
        <MainView />
      </div>
    );
  }
}

export default App;
