import React from 'react';
import './App.css';
import Operations from '../components/operations/Operations';
import Display from '../components/display/Display';

/**
 * App Class Component.
 */ 
export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Display />
        <Operations />
      </div>
    );
  }
}