import React from 'react'
import './Reviews.css';

const Review = ({name, text, date}) => {
    return (
        <div className="review">
            <div className="row">
                <p className="name">{name}</p>
                <p className="date">{date}</p>
            </div>
            <div className="row">
                <p className="text">{text}</p>
            </div>
        </div>
    )
}

export default Review;