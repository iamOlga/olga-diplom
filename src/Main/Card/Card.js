import React from 'react';
import './dist/Card.css';


const Card = ({title, value, class__card, setModalActive}) => {

    

    return (
        <div className={class__card} onClick={() => setModalActive(true)} >
            <div className="card__content">
                <p className="card__title">{title}</p>
                <p className="card__value">{value}</p>
            </div>
        </div>
    )
}

export default Card;