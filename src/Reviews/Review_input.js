import React from 'react'
import './Reviews.css';
import Button from "../Button/Button";

const Review_input = ({name, text}) => {
    return (
        <div className="review">
            <div className="row">
                <p className="name">{name}</p>
            </div>
            <div className="row">
                <textarea name="review_area" id="review_area" cols="30" rows="10"></textarea>
            </div>
            <div className="row row_button">
                <Button className="button" value="Оставить отзыв" isrow="row"/>
            </div>
        </div>
    )
}

export default Review_input;