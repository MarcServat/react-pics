// Libraries
import React, { Component } from 'react';

// Api
import unsplash from './api/unsplash';

// Components
import SearchBar from './components/SearchBar';
import ImagesList from './components/ImagesList';

class App extends Component {
  state = {images: []};

  onSearchSubmit = async (event, term) => {
    event.preventDefault();

    const response = await  unsplash.get('https://api.unsplash.com/search/photos', {params: {
      query: term
    }});
    this.setState({images: response.data.results})
    };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImagesList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
