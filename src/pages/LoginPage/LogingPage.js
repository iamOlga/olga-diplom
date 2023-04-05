import React, { useEffect } from "react";
import "./Account.css";
import SignIn from "../../components/signIn/SignIn";
import account_bg from "../../Images/booking-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginPage() {
  const navigate = useNavigate();
  // const userEmail = localStorage.getItem('userEmail');
  const userEmail = useSelector((state) => state.user.userEmail);
  useEffect(() => {
    if(userEmail) {
      navigate("/account_info");
    // window.location.href("/account_info");
    }
  }, [userEmail])

  //где-то тут нужно сделать проверку на вход в аккаунт и уже в зависимости от этого подключать нужный модуль
  return (
    <div
      className="account__container"
      style={{
        backgroundImage: `url(${account_bg})`,
      }}
    >
      {/*этот заголовок нужно будет показать только когда мы уже вошли в аккаунт*/}
      {/* <h2>Ваш аккаунт</h2> */}

      <div className="account__cont">
        <SignIn />
        {/*<SignUp />*/}
        {/*<Info_form />*/}
        {/*<Test/>*/}
        {/*<Test_result value="result1"/>*/}

        {/*ticket="0" нет билетов */}
        {/*а как дальше я пока хз ибо если у него например 2 билета будет то это както тож нужно показать*/}

        {/* <Account_info test_result="0" ticket="0"/> */}

        <div className="button_row">
          {/*
                    тут потом нужно менять текст
                    "Зарегистрироваться"  если будет вкл signin
                    "Войти в аккаунт"  если будет вкл signup
                    "Пройти тест позже"  если будет вкл тест
                    и скрывать блок инфо форм, тест резалт или сам акканут (аккаунт инфо)
                    */}

          <Link className="button_secondary" to={"/register"}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
