import React from "react";
import "./Account.css";
import account_bg from "../../assets/bookingPage/booking-bg.png";
import { Link, useNavigate } from "react-router-dom";
import AccountInfo from "../../components/accountinfo/AccountInfo";
import Button from "../../components/Button/Button";

function AccountInfoPage() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div
      className="account__container"
      style={{
        backgroundImage: `url(${account_bg})`,
      }}
    >
      {userEmail && <h2>Ваш аккаунт</h2>}
      <Button value={"Выйти из аккаунта"} isrow={true} onClickAction={handleLogOut} />
      <div className="account__cont">
        <AccountInfo />
        {/*<AccountInfo test_result="result2" ticket="0" />*/}

        {/*<div className="button_row">*/}
        {/*  <Link className="button_secondary" to={"/register"}>*/}
        {/*    Зарегистрироваться*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default AccountInfoPage;
