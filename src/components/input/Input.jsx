import React from "react";

const Input = ({ title, fullWidth, register, type, placeholder, error }) => {
  return (
    <>
      <div
        className={
          fullWidth === true ? "input_container full" : "input_container"
        }
      >
        <p className="input_name">{title}</p>
        <input {...register} type={type} placeholder={placeholder} />
      </div>
      {error?.message && <p>{error.message}</p>}
    </>
  );
};

export default Input;
