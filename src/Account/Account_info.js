import React from 'react'
import { useState } from 'react';
import './Account.css';
import Input from './../Booking/Elements/Input';

import account_bg from './../Images/booking-bg.png';

function Account_info() {

    return (
        <div className="account__container">
            <h2>Ваш аккаунт</h2>

                <form>
                    <div className="row">
                        <Input elid="1" type={"text"} name={"Имя"} fullwidth={false}/>
                        <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={false}/>
                    </div>

                    <div className="row">
                        <Input elid="3" type={"text"} name={"Электронный адрес"} fullwidth={true}/>
                    </div>
                </form>
        </div>
    )
}

export default Account_info;