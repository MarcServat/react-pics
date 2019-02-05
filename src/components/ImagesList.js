import './ImagesList.css';
// Libs
import React, {Component} from 'react';
// Components
import ImageCard from './ImageCard';


class ImagesList extends Component {

  render() {
    const images = this.props.images.map(img => {
      return (<ImageCard image={img} />);
    });
    return (
        <div className='image-list'>{images}</div>
    );
  }
}

export default ImagesList;