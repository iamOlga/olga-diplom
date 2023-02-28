import React from 'react'
import rocket from './../../Images/rocket.png';
import './dist/Rocket.css'

const Rocket = () => {
  return (
    <div className="rocket__container">
        <div className="rocket__bg"></div>
        <div className="rocket__content">
            <img src={rocket}></img>
            <div className="container__info">
                <p className="title">Наш космический корабль</p>
                <p className="text">Встречайте ракету, которая проложит дорогу в космос для вас. Наш безопасный, плавный подъем и спуск позволяет людям практически любого возраста и физического состояния насладиться этим событием, которое случается раз в жизни.</p>
            </div>
        </div>
    </div>
  )
}


export default Rocket;