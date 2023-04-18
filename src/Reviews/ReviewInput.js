import React from 'react'
import './Reviews.css';
import Button from "../components/Button/Button";



const ReviewInput = ({ name, register }) => {
  return (
    <div className="review">
      <div className="row">
        <p className="name">{name}</p>
      </div>

      <div className="row">
        <textarea
          name="review_area"
          id="review_area"
          cols="30"
          rows="10"
          {...register}
        ></textarea>
      </div>
      <div className="row row_button">
        <Button className="button" value="Оставить отзыв" isrow={true} />
      </div>
    </div>
  );
};

export default ReviewInput;