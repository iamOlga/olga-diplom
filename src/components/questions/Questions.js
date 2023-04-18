import React from "react";
import { useController } from "react-hook-form";

const Question = ({ title, num, value1, value2, value3, control, name }) => {
  const { field } = useController({control, name})

  return (
    <div className="q_cont">
      <div className="number_container">
        <p>{num}/10</p>
      </div>
      <input name={name} type="hidden" value={field.value}></input>
      <div className="question">
        <h2>{title}</h2>
        <div className="radio_cont">
          <label>
            {value1}
            <input
              id={num}
              type="radio"
              className="modern-radio"
              value="1"
              name={num}
              onClick={() => field.onChange("1")}
            />
            <span></span>
          </label>
          <label>
            {value2}
            <input
              id={num}
              type="radio"
              className="modern-radio"
              value="2"
              name={num}
              onClick={() => field.onChange("2")}
            />
            <span></span>
          </label>
          <label>
            {value3}
            <input
              id={num}
              type="radio"
              className="modern-radio"
              value="3"
              name={num}
              onClick={() => field.onChange("3")}
            />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question;
