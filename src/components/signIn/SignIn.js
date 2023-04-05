import React from "react";
import "./Account.css";
import Input from "../../Booking/Elements/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { postFormData } from "../../redux/slices/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postFormData({
      targetUrl: 'auth',
      body: {
        email: 'timkremko1@gmail.com',
        password: 'PogUOmega1',
      }
    }))
  }
  return (
    <div className="form__container">
      <h2>Войти в аккаунт</h2>

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
          <div className="column">
            <Input
              elid="2"
              type={"password"}
              name={"Пароль"}
              fullwidth={true}
            />
            <a href="#">Забыли пароль?</a>
          </div>
        </div>

        <div className="button_container">
          <Button className="button" value="Войти" isrow="row" onClickAction={onClickSubmitHandler}/>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
