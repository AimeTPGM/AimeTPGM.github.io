import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './pages/MainView';
import { colorScheme } from './appConstant';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

class App extends Component {
  render() {
    return (
      <div className="App" css={{backgroundImage: colorScheme.primaryBgColor, color: colorScheme.primaryTextColor}}>
        <MainView />
      </div>
    );
  }
}

export default App;
