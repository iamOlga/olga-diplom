import React, { useEffect } from "react";
import "./Account.css";
import Input from "../../components/input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserState, postFormData } from "../../redux/slices/userSlice";
import { useForm } from "react-hook-form";


const SignUp = () => {
  const { register, handleSubmit, formState } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isResponseOk = useSelector((state) => state.user.isResponseOk);

  useEffect(() => {
    if(isResponseOk) {
      navigate('/info_form');
    }
    return () => dispatch(clearUserState())
  }, [dispatch, isResponseOk, navigate]);

    const onClickSubmitHandler = (data) => {
      dispatch(
        postFormData({
          targetUrl: "register",
          body: data,
        })
      );
    };
  return (
    <div className="form__container">
      <h2>Регистрация</h2>

      <form onSubmit={handleSubmit(onClickSubmitHandler)}>
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
            error={formState.errors.email}
          />
        </div>

        <div className="row">
          <Input
            type={"password"}
            title={"Пароль"}
            placeholder={"Пароль"}
            fullWidth={true}
            register={register("password", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            error={formState.errors.password}
          />
        </div>
        <div className="row">
          <Input
            type={"password"}
            title={"Повторите пароль"}
            placeholder={"Повторите пароль"}
            fullWidth={true}
            register={register("confirm_password", {
              required: {
                value: true,
                message: "This field is required!",
              },
            })}
            error={formState.errors.confirm_password}
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
