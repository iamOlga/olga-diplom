import React from 'react'
import './Account.css';
import Account_info from "./Account_info";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function Account() {

    //где-то тут нужно сделать проверку на вход в аккаунт и уже в зависимости от этого подключать нужный модуль
    return (
        <SignIn/>
    )
}

export default Account;