import React from 'react'
import { useState } from 'react';
import './Account.css';
import Input from './../Booking/Elements/Input';
import Button from "../Button/Button";

function Info_form() {

    return (

        <div className="form__container">
            <h2>Заполните личную информацию</h2>

            <form>
                <div className="row">
                    <Input elid="1" type={"text"} name={"Имя"} fullwidth={false}/>
                    <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={false}/>
                </div>

                <div className="row">
                    <div className="radio_cont">
                        <p className="input_name">Пол</p>
                        <div className="radio_labels">
                            <label>
                                мужчина
                                <input type="radio" className="modern-radio" value="1" name="a"/>
                                <span></span>
                            </label>
                            <label>
                                женщина
                                <input type="radio" className="modern-radio" value="2" name="a"/>
                                <span></span>
                            </label>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <Input elid="3" type={"number"} name={"Возраст"} min={"18"} max={"60"} fullwidth={true}/>
                </div>

                <div className="button_container">
                    <Button className="button" value="Далее" isrow="row"/>
                </div>

            </form>
        </div>

    )
}

export default Info_form;