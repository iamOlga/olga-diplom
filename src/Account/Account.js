import React from 'react'
import './Account.css';
import Account_info from "./Account_info";
import SignIn from "./SignIn";
import Test from "./Test";
import SignUp from "./SignUp";
import Info_form from "./Info_form";
import account_bg from "../Images/booking-bg.png";

function Account() {

    //где-то тут нужно сделать проверку на вход в аккаунт и уже в зависимости от этого подключать нужный модуль
    return (
        <div className="account__container"
             style={{
                 backgroundImage: `url(${account_bg})`,
             }}
        >
            <div className="account__cont">
                {/*<SignIn/>*/}
                {/*<SignUp />*/}
                {/*<Info_form />*/}
                <Test/>

                <div className="button_row">

                    {/*
                    тут потом нужно менять текст
                    "Зарегистрироваться"  если будет вкл signin
                    "Войти в аккаунт"  если будет вкл signup
                    "Пройти тест позже"  если будет вкл тест
                    и скрывать блок инфо форм
                    */}

                    <a className="button_secondary" href="#">Зарегистрироваться</a>
                </div>
            </div>
        </div>

    )
}

export default Account;