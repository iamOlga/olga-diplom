import React from 'react'
import './dist/Tours.css';

class Tours_card extends React.Component {
    render() {
  return (
    <div className={this.props.isreverse == 'row' ? 'tour__card' : 'tour__card tour__card-reverse'}
    style={{
        backgroundImage: `url(${this.props.urlbg})`,
      }}
    >
        <div className="tour__card__info">
            <p className="tour__card__info-name">{this.props.name}</p>

            <div className="tour__card__info-place">
                <p className="tour__card__info-place-name">{this.props.place}</p>
                <p className="tour__card__info-place-description">{this.props.description}</p>
            </div>

            <hr></hr>

            <div className="tour__card__info-add">
                <div className="tour__card__info-add-row">
                    <p>Длительность полета:</p>
                    <p>{this.props.time_fly} в одну сторону</p>
                </div>
                <div className="tour__card__info-add-row">
                    <p>Пребывание на планете:</p>
                    <p>{this.props.time_onplanet}</p>
                </div>
                <div className="tour__card__info-add-row">
                    <p>Число пассажиров:</p>
                    <p>{this.props.amount_people}</p>
                </div>
            </div>

            <p className="tour__card__info-price">$ {this.props.price}</p>
        </div>

        <div className="tour__card__img"
        style={{
            backgroundImage: `url(${this.props.imgurl})`,
        }}
        />
    </div>
  )
    }
}

export default Tours_card;