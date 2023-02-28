import React from 'react'
import './../dist/Booking.css';

class Card extends React.Component {

  render() {
    return (
      <div className='booking__card' 
      style={{
          backgroundImage: `url(${this.props.urlbg})`,
        }}
      >
          <p className='booking__card__title'>{this.props.title}</p>
          <p className='booking__card__price'>$ {this.props.price}</p>
      </div>
    )
  }
}

export default Card;