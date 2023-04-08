import React from "react";
import "./Account.css";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

import img1 from "../../assets/accountPage/result1.jpg";
import img2 from "../../assets/accountPage/result2.jpg";
import img3 from "../../assets/accountPage/result3.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, postFormData } from "../../redux/slices/userSlice";
import {useEffect} from 'react'


const AccountInfo = ({ test_result, ticket }) => {
 
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues:  accountInfo,
  });
  const userEmail = localStorage.getItem('userEmail')

  console.log(accountInfo);
  useEffect(() => {
    if(accountInfo) {
      setValue('firstname', accountInfo.firstname);
      setValue("lastname", accountInfo.lastname);
      setValue("birthday", accountInfo.birthday);
      setValue("email", accountInfo.email);
    }
  }, [accountInfo, setValue])

  let text_result;
  let img_src;
  if (test_result === "result1") {
    text_result =
      "Тебе лучше остаться на Земле! К сожалению, ты не готов к дальним полетам, а твое тело не выдержит таких физических нагрузок. Но не отчаивайся, а пройди полное медецинское обследование для точного результата!";
    img_src = img1;
  } else if (test_result === "result2") {
    text_result =
      "Ты уверен, что ты сможешь полететь в космос? Результаты показали, что тебе лучше отказаться от этой идеи, по крайней мере, не лететь на большие расстояния. Однако ты можешь попробовать отправиться на орбиту нашей Земли!";
    img_src = img2;
  } else if (test_result === "result3") {
    text_result =
      "Ого! Ты готов к полету в любую точку космоса! Но возможности наши не настолько большие. Мы можем предложить тебе отправиться в космическое путешествие на Луну или Марс. Ждем тебя!";
    img_src = img3;
  } else if (test_result === "0") {
    text_result =
      "Хочешь узнать, куда тебе стоит полететь? А может тебе лучше остаться на Земле? Пройди небольшой тест, и мы дадим тебе совет!";
  }

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
       return () => {};
     }, [dispatch, userEmail]);



  return (
    <div className="account">
      <div className="info_block">
        <h2>Персональная информация</h2>
        <form onSubmit={handleSubmit(onClickSubmitHandler)}>
          <div className="row">
            <Input
              type={"text"}
              title={"Имя"}
              placeholder={"Имя"}
              fullWidth={true}
              register={register("firstname", {
                required: {
                  value: true,
                  message: "This field is required!",
                },
              })}
              error={formState.errors.name}
            />
          </div>

          <div className="row">
            <Input
              type={"text"}
              title={"Фамилия"}
              placeholder={"Фамилия"}
              fullWidth={true}
              register={register("lastname", {
                required: {
                  value: true,
                  message: "This field is required!",
                },
              })}
              error={formState.errors.name}
            />
          </div>

          <div className="row_gender">
            <p className="input_name">Пол:</p>
            <p>{accountInfo?.gender}</p>
          </div>

          <div className="column">
            <p className="input_name">Дата рождения</p>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2005-01-01"
              min="1923-01-01"
              max="2005-01-01"
            />
          </div>

          <div className="row">
            <Input
              type={"text"}
              title={"Электронный адрес"}
              placeholder={"Электронный адрес"}
              fullWidth={true}
              register={register("email", {
                required: {
                  value: true,
                  message: "This field is required!",
                },
              })}
              error={formState.errors.name}
            />
          </div>

          <div className="row_button">
            <Button
              className="button"
              value="Сохранить"
              isrow="row"
              onClickAction={onClickSubmitHandler}
            />
          </div>
        </form>
      </div>

      <div className="info_block">
        <h2>Подбор полета</h2>
        <div className={test_result !== "0" ? "div_result" : "div_result_none"}>
          <p>{text_result}</p>
          <img src={img_src} alt="" />
        </div>
        <div className={test_result === "0" ? "div_result" : "div_result_none"}>
          <p className="text_result">{text_result}</p>
          <div className="button_container">
            <Button className="button" value="Пройти тест" isrow="row" />
          </div>
        </div>
      </div>

      <div className="info_block">
        <h2>Ваши билеты</h2>

        <div className={ticket === "0" ? "div_result" : "div_result_none"}>
          <p className="text_result">У вас нет ни одного билета</p>
          <div className="button_container">
            <Link to="/booking">
              <Button className="button" value="Выбрать билет" isrow="row" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
