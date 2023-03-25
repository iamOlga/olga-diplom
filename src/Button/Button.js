import React from 'react'
import './Button.css'

const Button = ({value, isrow}) => {
  return (
    <button href="#" className={isrow=="row" ? "button" : "button button__column"}>
        <p>{value}</p>
        <div className="button_cont">
            <div className="circle-1">
                <div className="circle-2"></div>
            </div>
        </div>
    </button>
  )
}

export default Button;