import React from 'react'
import './Button.css'

const Button = ({value, isrow}) => {
  return (
    <a href="#" className={isrow=="row" ? "button" : "button button__column"}>
        <p>{value}</p>
        <div className="button_cont">
            <div className="circle-1">
                <div className="circle-2"></div>
            </div>
        </div>
    </a>
  )
}

export default Button;