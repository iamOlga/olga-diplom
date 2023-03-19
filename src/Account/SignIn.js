import React from 'react'
import { useState } from 'react';
import './Account.css';
import Input from './../Booking/Elements/Input';
import Button from "../Button/Button";

function SignIn() {

    return (

            <div className="form__container">
                <h2>Войти в аккаунт</h2>

                <form>
                    <div className="row">
                        <Input elid="1" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
                    </div>

                    <div className="row">
                        <div className="column">
                            <Input elid="2" type={"password"} name={"Пароль"} fullwidth={true}/>
                            <a href="#">Забыли пароль?</a>
                        </div>

                    </div>

                    <div className="button_container">
                        <Button className="button" value="Войти" isrow="row" />
                    </div>



                </form>
            </div>

    )
}

export default SignIn;