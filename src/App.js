import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
