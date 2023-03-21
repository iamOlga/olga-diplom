import React from 'react'
import { useState } from 'react';
import './dist/Booking.css';
import Card from './Elements/Card'
import Modal from './Elements/Modal';
import Button from './../Button/Button';

import Booking_form from "./Booking_form";

import cardbg1 from './../Images/book-bg1.png';
import cardbg2 from './../Images/book-bg2.png';
import cardbg3 from './../Images/book-bg3.png';
import booking_bg from './../Images/booking-bg.png';
import {Link} from "react-router-dom";

function Booking() {

  const [card_bg1] = useState(cardbg1);
  const [card_bg2] = useState(cardbg2);
  const [card_bg3] = useState(cardbg3);

  const [modalActive, setModalActive] = useState(false);


/*   const name = document.getElementById("elem1").value;
  const surname = document.getElementById("elem2").value; 
  const email = document.getElementById("elem3").value; 
  const country = document.getElementById("elem4").value; 
  const city = document.getElementById("elem5").value;  */

  return (
    <div className="booking__container">
      
        <Modal active={modalActive} setActive={setModalActive} text='Вы отправили заявку на следующий рейс в космос!'/* name={name + ' ' + surname} email={email} country={country} city={city} *//> 

        <h2>Забронируй свой полет в космос!</h2>
        <h3>Купите место у окна в космическом полете, который изменит вашу жизнь</h3>
    
        <div className="cards__container" 
        style={{
            backgroundImage: `url(${booking_bg})`,
          }}
        >
          <Card urlbg={card_bg1} title='mars' price='2 000 000'/>
          <Card urlbg={card_bg2} title='the moon' price='1 000 000'/>
          <Card urlbg={card_bg3} title='space station' price='1 500 000'/>
        </div>

        //это форма, которая будет показываться, если ты вошел в аккаунт
        <Booking_form/>

        //а это будет показываться, если ты НЕ вошел в аккаунт
        {/*<div className="link__container">*/}
        {/*    <h3>Войдите в личный аккаунт для того, чтобы забронировать билет</h3>*/}
        {/*    <Link to="/account"><Button className="button" value="Войти в аккаунт" isrow="row"/></Link>*/}
        {/*</div>*/}

    </div>
  )
}

export default Booking;