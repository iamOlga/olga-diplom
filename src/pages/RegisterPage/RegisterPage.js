import React from "react";
import "./Account.css";
import SignUp from '../../components/signUp/SignUp'
import account_bg from "../../Images/booking-bg.png";
import { Link } from "react-router-dom";


function RegisterPage() {
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
        <SignUp />
        <div className="button_row">
          <span className="account_question">Уже есть аккаунт?</span>
          <Link className="button_secondary" to={"/login"}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
