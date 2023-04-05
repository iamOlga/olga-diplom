import React from "react";
import "./Account.css";
import account_bg from "../../Images/booking-bg.png";
import { Link } from "react-router-dom";
import AccountInfo from "../../components/accountinfo/AccountInfo";

function AccountInfoPage() {
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
        <AccountInfo test_result="0" ticket="0"/>

        <div className="button_row">
          <Link className="button_secondary" to={"/register"}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountInfoPage;
