import React, {useState} from "react";
import "./Account.css";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

import img1 from "../../assets/accountPage/result1.jpg";
import img2 from "../../assets/accountPage/result2.jpg";
import img3 from "../../assets/accountPage/result3.jpg";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, postFormData} from "../../redux/slices/userSlice";
import {clearUserState} from "../../redux/slices/userSlice";
import {useEffect} from 'react'
import axios from "axios";


const AccountInfo = () => {
    const [date, setDate] = useState();
    const accountInfo = useSelector((state) => state.user.accountInfo);
    const dispatch = useDispatch();
    const {register, handleSubmit, formState, setValue} = useForm({
        defaultValues: accountInfo,
    });

    const [test_result, setTest_result] = useState("")
    const userEmail = localStorage.getItem('userEmail')
    let result;

    const getTestResult = async (email) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/get-points', {email});

            if(result !== 0){
                result = response.data;
                setTestResult(result)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTestResult(userEmail);
    }, [])

    const setTestResult = (result) => {
        if (result !== 0) {
            if (result <= 4) {
                setTest_result("Тебе лучше остаться на Земле! К сожалению, ты не готов к дальним полетам, а твое тело не выдержит таких физических нагрузок. Но не отчаивайся, а пройди полное медецинское обследование для точного результата!")
            } else if (result > 4 && result <= 7) {
                setTest_result("Ты уверен, что ты сможешь полететь в космос? Результаты показали, что тебе лучше отказаться от этой идеи, по крайней мере, не лететь на большие расстояния. Однако ты можешь попробовать отправиться на орбиту нашей Земли!")
            } else if (result > 7) {
                setTest_result("Ого! Ты готов к полету в любую точку космоса! Но возможности наши не настолько большие. Мы можем предложить тебе отправиться в космическое путешествие на Луну или Марс. Ждем тебя!")
            }
        }
    }

    let [tickets, setTickets] = useState([]);

    const getTickets = async (email) => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/get_info?email=${email}`);
            setTickets(response.data.tickets);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTickets(userEmail)
    }, [])


    const onClickSubmitHandler = (data) => {
        dispatch(
            postFormData({
                targetUrl: "info",
                body: data,
            })
        );
    };

    useEffect(() => {
        if (userEmail) dispatch(getUserData(`get_info?email=${userEmail}`));
        return () => dispatch(clearUserState());
    }, [dispatch, userEmail]);

    useEffect(() => {
        if (accountInfo) {
            setValue("firstname", accountInfo.firstname);
            setValue("lastname", accountInfo.lastname);
            setValue("birthday", accountInfo.birthday);
            setValue("email", accountInfo.email);
        }
    }, [accountInfo, dispatch, setValue]);


    return (
        <div className="account">
            <div className="info_block">

                {userEmail !== "olgab2806@gmail.com" ?
                <h2>Персональная информация</h2>
                :
                <h2>Персональная информация Админа</h2>
                }

                <form onSubmit={handleSubmit(onClickSubmitHandler)}>
                    <div className="row_gender">
                        <p className="input_name">Имя:</p>
                        <p>{accountInfo?.firstname}</p>
                        {/*<Input*/}
                        {/*    type={"text"}*/}
                        {/*    title={"Имя"}*/}
                        {/*    placeholder={"Имя"}*/}
                        {/*    fullWidth={true}*/}
                        {/*    register={register("firstname")}*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                    </div>

                    <div className="row_gender">
                        <p className="input_name">Фамилия:</p>
                        <p>{accountInfo?.lastname}</p>
                        {/*<Input*/}
                        {/*    type={"text"}*/}
                        {/*    title={"Фамилия"}*/}
                        {/*    placeholder={"Фамилия"}*/}
                        {/*    fullWidth={true}*/}
                        {/*    register={register("lastname")}*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                    </div>

                    <div className="row_gender">
                        <p className="input_name">Пол:</p>
                        <p>{accountInfo?.gender}</p>
                    </div>

                    <div className="row_gender">
                        <p className="input_name">Дата рождения</p>
                        <p>{accountInfo?.birthday}</p>
                        {/*<input*/}
                        {/*    {...register("birthday", {})}*/}
                        {/*    type="date"*/}
                        {/*    id="start"*/}
                        {/*    name="trip-start"*/}
                        {/*    value={date}*/}
                        {/*    min="1923-01-01"*/}
                        {/*    onChange={(e) => setDate(e.target.value)}*/}
                        {/*/>*/}
                    </div>

                    <div className="row_gender">
                        <p className="input_name">Электронный адрес</p>
                        <p>{accountInfo?.email}</p>
                        {/*<Input*/}
                        {/*    type={"text"}*/}
                        {/*    title={"Электронный адрес"}*/}
                        {/*    placeholder={"Электронный адрес"}*/}
                        {/*    fullWidth={true}*/}
                        {/*    register={register("email")}*/}
                        {/*    error={formState.errors.name}*/}
                        {/*/>*/}
                    </div>
                </form>
            </div>

            {userEmail !== "olgab2806@gmail.com" ?
            <div className="info_block">
                <h2>Подбор полета</h2>
                {result !== 0 ?
                    <div className="div_result">
                        <p>{test_result}</p>
                    </div>
                    :
                    <div className="div_result">
                        <p className="text_result">Хочешь узнать, куда тебе стоит полететь? А может тебе лучше остаться на Земле? Пройди небольшой тест, и мы дадим тебе совет!</p>
                        <div className="button_container">
                            <Link className="link" to="/test">
                                <Button className="button" value="Пройти тест" isrow="row"/>
                            </Link>
                        </div>
                    </div>
                }
            </div>
                :
                <div></div>
            }

            {userEmail !== "olgab2806@gmail.com" ?
            <div className="info_block">
                <h2>Ваши билеты</h2>
                {tickets.length == 0 ?
                    <div className="div_result">
                        <p className="text_result">У вас нет ни одного билета</p>
                        <div className="button_container">
                            <Link to="/booking">
                                <Button className="button" value="Выбрать билет" isrow="row"/>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="div_result">
                        {tickets.map((ticket) => (
                            <div className="user-ticket" key={ticket.id}>
                                <p className="user-ticket-title">Тур: {ticket.tour}</p>
                                <p>Дата: {ticket.date_flight}</p>
                                <p>Длительность: {ticket.duration}</p>
                                <p>Цена: {ticket.price}</p>
                                <p>residence: {ticket.residence}</p>
                            </div>
                        ))}
                        <div className="button_container">
                            <Link to="/booking">
                                <Button className="button" value="Выбрать билет" isrow="row"/>
                            </Link>
                        </div>
                    </div>
                }
            </div>
                :
                <div></div>
            }
        </div>
    );
};

export default AccountInfo;
