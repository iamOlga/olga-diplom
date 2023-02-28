import React from 'react'
import './dist/Gallery_card.css';


class Gallery_card extends React.Component {
  render() {
    return (
      <div className="card_cont">
        <div className="card"
          style={{
            backgroundImage: `url(${this.props.sendUrl})`,
          }}
        />
      </div>
    );
  }
}

export default Gallery_card;