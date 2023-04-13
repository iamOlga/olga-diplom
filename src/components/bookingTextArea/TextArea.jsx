import React from "react";
import "../../pages/Booking/Booking.css";

const TextArea = ({ fullwidth, register, name }) => {
  return (
    <div
      className={
        fullwidth === true ? "input_container full" : "input_container"
      }
    >
      <p className="input_name">{name}</p>
      <textarea {...register} placeholder="Напиши ответ..." maxLength="850" />
    </div>
  );
};

export default TextArea;
