import React from "react";
import "./Account.css";
import account_bg from "../../assets/bookingPage/booking-bg.png";
import { Link } from "react-router-dom";
import InfoForm from "../../components/infoForm/InfoForm";


function InfoFormPage() {
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
        <InfoForm />
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

export default InfoFormPage;
