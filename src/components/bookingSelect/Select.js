import React from "react";
import "../../pages/Booking/Booking.css";
import { useController } from "react-hook-form";
import './style.css'

const Select = ({ fullwidth, title, name, control }) => {
  const { field } = useController({ control, name });
  const options = ["Mars", "the Moon", "Space station"];
  return (
    <div
      className={
        fullwidth === true ? "input_container full" : "input_container"
      }
    >
      <input name={name} type="hidden" value={field.value}></input>
      <p className="input_name">{title}</p>
      <ul>
        {options.map((item) => {
          return (
            <li className="input_name booking__select"  onClick={() => field.onChange(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
