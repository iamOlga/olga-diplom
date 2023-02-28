import React from 'react'
import { useState } from 'react';
import './dist/Booking.css';
import Input from './Elements/Input';
import TextArea from './Elements/TextArea';
import Select from './Elements/Select';
import Button from './../Button/Button';
import Modal from './Elements/Modal';


function Booking_form() {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="booking__container">

            <Modal active={modalActive} setActive={setModalActive} text='Вы отправили заявку на следующий рейс в космос!'/* name={name + ' ' + surname} email={email} country={country} city={city} *//>

            <h2>Забронируй свой полет в космос!</h2>
            <h3>Купите место у окна в космическом полете, который изменит вашу жизнь</h3>


            <form>
                <h2>Контактная информация</h2>
                <div className="row">
                    <Input elid="1" type={"text"} name={"Имя"} fullwidth={false}/>
                    <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={false}/>
                </div>

                <div className="row">
                    <Input elid="3" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
                </div>

                <div className="row">
                    <Input elid="4" type={"text"} name={"Страна"} fullwidth={false}/>
                    <Input elid="5" type={"text"} name={"Город"} fullwidth={false}/>
                </div>

                <div className="row">
                    <Select name={"Куда вы хотите отправиться?"} fullwidth={true}/>
                </div>

                <div className="row">
                    <Input type={"number"} name={"Сколько мест вы бы хотели купить?"} fullwidth={true}/>
                </div>

                <div className="row">
                    <TextArea name={"В нескольких словах расскажите о себе, о своём экстремальном опыте"} fullwidth={true}/>
                </div>

                <div className="button_container" onClick={() => setModalActive(!modalActive)}>
                    <Button className="button" value="Отправить запрос" isrow="row"/>
                </div>
            </form>
        </div>
    )
}

export default Booking_form;