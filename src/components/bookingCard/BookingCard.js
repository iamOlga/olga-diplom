import React from "react";
import "../../pages/Booking/Booking.css";

const Card = ({ urlbg, title, price }) => {
  return (
    <div
      className="booking__card"
      alt="Booking Card"
      style={{
        backgroundImage: `url(${urlbg})`,
      }}
    >
      <p className="booking__card__title">{title}</p>
      <p className="booking__card__price">$ {price}</p>
    </div>
  );
};

export default Card;
