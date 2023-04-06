import React from "react";
import Input from "../../components/input/Input";
import Button from "../Button/Button";
import { postFormData } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const InfoForm = () => {
  const { register, handleSubmit, formState, setValue } = useForm();
  const dispatch = useDispatch();
  
  const onClickSubmitHandler = (data) => {
    dispatch(
      postFormData({
        targetUrl: "info",
        body: data,
      })
    );
  };
  return (
    <div className="form__container">
      <h2>Заполните личную информацию</h2>

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
            error={formState.errors.surname}
          />
        </div>

        <div className="row">
          <div className="radio_cont">
            <p className="input_name">Пол</p>
            <div className="radio_labels">
              <label>
                мужчина
                <input
                  type="radio"
                  className="modern-radio"
                  value="1"
                  name="a"
                  onClick={() => setValue("gender", "мужчина")}
                />
                <span></span>
              </label>
              <label>
                женщина
                <input
                  type="radio"
                  className="modern-radio"
                  value="2"
                  name="a"
                  onClick={() => setValue("gender", "женщина")}
                />
                <span></span>
              </label>
            </div>
          </div>
        </div>

        <div className="column">
          <p className="input_name">Дата рождения</p>
          <input
            {...register("birthday", {})}
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="1923-01-01"
            // max="2005-01-01"
          />
        </div>

        <div className="button_container">
          <Button
            className="button"
            value="Далее"
            isrow="row"
            onClickAction={onClickSubmitHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
