import React from "react";
import "./Account.css";
import Input from "../../components/input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { postFormData } from "../../redux/slices/userSlice";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState
  } = useForm();
  const dispatch = useDispatch();

  const onClickSubmitHandler = (data) => {
    if(userEmail == null){
      document.getElementById('er').innerText = "Проверьте правильность полей";
    }
    dispatch(
      postFormData({
        targetUrl: "auth",
        body: data,
      })
    );
  }

  const userEmail = localStorage.getItem('userEmail')



  return (
    <div className="form__container">
      <h2>Войти в аккаунт</h2>

      <form onSubmit={handleSubmit(onClickSubmitHandler)}>
        <div className="row">
          <Input
            type={"text"}
            title={"Электронный адрес"}
            placeholder={"Электронный адрес"}
            fullWidth={true}
            register={register("email")}
            error={formState.errors.email}
            er={"Проверьте правильность поля"}
          />
        </div>

        <div className="row">
          <div className="column">
            <Input
              type={"password"}
              title={"Пароль"}
              placeholder={"Пароль"}
              fullWidth={true}
              register={register("password")}

            />
            {/*<a href="#">Забыли пароль?</a>*/}
          </div>
        </div>

        <div className="row">
          <p id="er"></p>
        </div>

        <div className="button_container">
          <Button
            className="button"
            value="Войти"
            isrow="row"
            onClickAction={onClickSubmitHandler}
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
