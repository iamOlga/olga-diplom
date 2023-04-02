import React from "react";
import "./../dist/Booking.css";

const Card = ({ urlbg, title, price }) => {
  return (
    <img className="booking__card" src={urlbg} alt="Booking Card">
      <p className="booking__card__title">{title}</p>
      <p className="booking__card__price">$ {price}</p>
    </img>
  );
};

export default Card;
