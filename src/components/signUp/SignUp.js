import React from "react";
import "./Account.css";
import Input from "../../Booking/Elements/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { postFormData } from "../../redux/slices/userSlice";


const SignUp = () => {
  const dispatch = useDispatch();

    const onClickSubmitHandler = (e) => {
      e.preventDefault();
      dispatch(
        postFormData({
          targetUrl: "register",
          body: {
            email: "timkremko@gmail23.com",
            password: "PogUOmega1",
            confirm_password: "PogUOmega1",
          },
        })
      );
    };
  return (
    <div className="form__container">
      <h2>Регистрация</h2>

      <form>
        <div className="row">
          <Input
            elid="1"
            type={"text"}
            name={"Электронный адрес"}
            fullwidth={true}
          />
        </div>

        <div className="row">
          <Input elid="2" type={"password"} name={"Пароль"} fullwidth={true} />
        </div>
        <div className="row">
          <Input
            elid="3"
            type={"password"}
            name={"Повторите пароль"}
            fullwidth={true}
          />
        </div>

        <div className="button_container">
          <Button
            className="button"
            value="Зарегистрироваться"
            isrow="row"
            onClickAction={onClickSubmitHandler}
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
