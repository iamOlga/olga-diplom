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

            <div className="booking">
                <div className="info_block">
                    <h2>Персональная информация</h2>
                    <form>

                        {/*эти данные из бд типа*/}

                        <div className="row">
                            <Input elid="1" type={"text"} name={"Имя"} fullwidth={true}/>
                        </div>

                        <div className="row">
                            <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={true}/>
                        </div>

                        <div className="row_gender">
                            <p className="input_name">Пол:</p>
                            <p>женский</p>
                        </div>

                        <div className="column">
                            <p className="input_name">Дата рождения</p>
                            <input type="date" id="start" name="trip-start"
                                   value="2018-07-22" min="1923-01-01" max="2005-01-01"/>
                        </div>

                        <div className="row">
                            <Input elid="3" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
                        </div>

                        {/*А ЭТИ ДАННЫЕ НУЖНО БУДЕТ ВВОДИТЬ И СДЕЛАТЬ ПРОВЕРДКУ ЧТОБ ВСЕ БЫЛО ВВЕДЕНО*/}

                        <div className="row">
                            <Input elid="4" type={"text"} name={"Страна"} fullwidth={false}/>
                            <Input elid="5" type={"text"} name={"Город"} fullwidth={false}/>
                        </div>

                        <div className="row">
                            <Select name={"Куда вы хотите отправиться?"} fullwidth={true}/>
                        </div>

                        <div className="row">
                            <TextArea name={"В нескольких словах расскажите о себе, о своём экстремальном опыте"} fullwidth={true}/>
                        </div>

                        <div className="button_container" onClick={() => setModalActive(!modalActive)}>
                            <Button className="button" value="Отправить запрос" isrow="row"/>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Booking_form;