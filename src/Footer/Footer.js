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
            <Link to="/booking"><Button className="button" value="Отправиться в космос" isrow="row"/></Link>
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
              <Link className="link" to="/virtual_tour">о полете</Link>
              <Link className="link" to="/account">аккаунт</Link>
              <Link className="link" to="/reviews">отзывы</Link>
              <Link className="link" to="/help">помощь</Link>

            </nav>
          </div>
          <img className="footer_bg" src={footer_bg}/>
          
        </div>
        
    </div>
  )
}

export default Footer;