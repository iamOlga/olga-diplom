import React from 'react'
import { useState } from 'react';
import './Account.css';
import Input from './../Booking/Elements/Input';
import Button from "../Button/Button";

import account_bg from './../Images/booking-bg.png';

function SignUp() {

    return (
        <div className="account__container"
             style={{
                 backgroundImage: `url(${account_bg})`,
             }}
        >

            <div className="form__container">
                <h2>Регистрация</h2>

                <form>
                    <div className="row">
                        <Input elid="1" type={"text"} name={"Имя"} fullwidth={false}/>
                        <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={false}/>
                    </div>

                    <div className="row">
                        <Input elid="3" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
                    </div>

                    <div className="row">
                        <Input elid="4" type={"password"} name={"Пароль"} fullwidth={true}/>
                    </div>

                    <div className="button_container">
                        <Button className="button" value="Зарегистрироваться" isrow="row"/>
                    </div>

                    <div className="row">
                        <a className="button_secondary" href="#">Войти в аккаунт</a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp;