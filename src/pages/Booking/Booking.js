import React from 'react'
import { useState } from 'react';
import './Booking.css';
import Card from '../../components/bookingCard/BookingCard'
import Modal from '../../components/bookingModal/Modal';

import cardbg1 from '../../assets/bookingPage/book-bg1.png';
import cardbg2 from "../../assets/bookingPage/book-bg2.png";
import cardbg3 from "../../assets/bookingPage/book-bg3.png";
import booking_bg from "../../assets/bookingPage/booking-bg.png";
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import BookingForm from '../../components/bookingForm/BookingForm';

function Booking() {
  const isUserLogged = localStorage.getItem("userEmail");
  const [modalActive, setModalActive] = useState(false);

/*   const name = document.getElementById("elem1").value;
  const surname = document.getElementById("elem2").value; 
  const email = document.getElementById("elem3").value; 
  const country = document.getElementById("elem4").value; 
  const city = document.getElementById("elem5").value;  */

  return (
    <div className="booking__container">
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text="Вы отправили заявку на следующий рейс в космос!" /* name={name + ' ' + surname} email={email} country={country} city={city} */
      />
      <h2>Забронируй свой полет в космос!</h2>
      <h3>
        Купите место у окна в космическом полете, который изменит вашу жизнь
      </h3>
      <div
        className="cards__container"
        style={{
          backgroundImage: `url(${booking_bg})`,
        }}
      >
        <Card urlbg={cardbg1} title="mars" price="2 000 000" />
        <Card urlbg={cardbg2} title="the moon" price="1 000 000" />
        <Card urlbg={cardbg3} title="space station" price="1 500 000" />
      </div>
      {isUserLogged && isUserLogged !== 'undefined' ? (
        <BookingForm />
      ) : (
        <div className="link__container">
          <h3>Войдите в личный аккаунт для того, чтобы забронировать билет</h3>
          <Link to="/login">
            <Button className="button" value="Войти в аккаунт" isrow="row" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Booking;