import React from 'react'
import Button from './../Button/Button';
import './dist/Footer.css'
import footer_bg from "./../Images/footer-bg.png"
import logo from "./../Images/logo_2.png"

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__container-top">
            <p className="email">© Бабич Ольга</p>
            <Button className="button" value="Отправиться в космос" isrow="row"/>
        </div>

        <div className="footer__container-bottom">
          <div className="footer_content">
            <Link to="/">
              <img className="footer_logo" src={logo}/>
            </Link>
            
            <nav>
              <Link className="link" to="/booking">забронировать</Link>
              <Link className="link" to="/gallery">галерея</Link>
              <Link className="link" to="/tours">туры</Link>
            </nav>
          </div>
          <img className="footer_bg" src={footer_bg}/>
          
        </div>
        
    </div>
  )
}

export default Footer;