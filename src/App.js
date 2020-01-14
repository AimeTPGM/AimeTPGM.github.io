import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './pages/MainView';
import { colorScheme } from './appConstant';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import SummaryView from './pages/SummaryView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App" css={{backgroundColor: colorScheme.primaryBgColor, color: colorScheme.primaryTextColor}}>
        <Route exact path="/" component={MainView} />
        <Route exact path="/summary" component={SummaryView} />
      </div>
    );
  }
}

export default App;
