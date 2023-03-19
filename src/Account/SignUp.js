import React, { useState } from 'react';
import axios from 'axios';
import './Account.css';
import Input from './../Booking/Elements/Input';
import Button from "../Button/Button";
import { Redirect } from 'react-router-dom';


import account_bg from './../Images/booking-bg.png';


function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/register', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        })
            .then(response => {
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                let old_ul = document.getElementById('alert');
                if (old_ul) {
                    old_ul.remove();
                }
                alert(response.data);
                return <Redirect to="/" />;
            })
            .catch(error => {
                let old_ul = document.getElementById('alert');
                if (old_ul) {
                    old_ul.remove();
                }
                let errors = error.response.data.errors;
                let alert = document.getElementById('form-register');
                let ul = document.createElement('ul');
                ul.id = "alert";
                ul.style.color = "white";
                alert.prepend(ul);
                for (var key in errors) {
                    let li = document.createElement('li');
                    li.innerHTML = errors[key];
                    ul.append(li);
                }

            });
    }

    return (
        <div className="account__container"
             style={{
                 backgroundImage: `url(${account_bg})`,
             }}
        >

            <div className="form__container">
                <h2>Регистрация</h2>

                <form onSubmit={handleSubmit} id={"form-register"}>
                    <div className="row">
                        <Input elid="1" type={"text"} name={"Имя"} value={firstname} onchange={event => setFirstname(event.target.value)} fullwidth={false}/>
                        <Input elid="2" type={"text"} name={"Фамилия"} value={lastname} onchange={event => setLastname(event.target.value)} fullwidth={false}/>
                    </div>

                    <div className="row">
                        <Input elid="3" type={"email"} name={"Электронный адрес"} value={email} onchange={event => setEmail(event.target.value)} fullwidth={true}/>
                    </div>

                    <div className="row">
                        <Input elid="4" type={"password"} name={"Пароль"} value={password} onchange={event => setPassword(event.target.value)} fullwidth={true}/>
                    </div>

                    <div className="button_container">
                        {/*<Button className="button" value="Зарегистрироваться" isrow="row"/>*/}
                        <button type="submit">Зарегистрироваться</button>
                    </div>

                    <div className="row">
                        <a className="button_secondary" href="#">Войти в аккаунт</a>
                    </div>

                </form>
            </div>
        </div>
    )

    // const submitLink = document.getElementById('submitLink');
    // const myForm = document.getElementById('form-register');
    //
    // submitLink.addEventListener('click', function(e) {
    //     e.preventDefault(); // prevent the link from navigating to a new page
    //     myForm.submit(); // submit the form
    //     console.log('edede');
    // });
}

export default SignUp;