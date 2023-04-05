import React from "react";
import Input from "../../Booking/Elements/Input";
import Button from "../Button/Button";
import { postFormData } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const InfoForm = () => {
  const dispatch = useDispatch();

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postFormData({
        targetUrl: "info",
        body: {
          firstname: "Tymek",
          lastname: "Kremko",
          gender: "оно",
          birthday: "2001-08-04",
          userEmail: "timkremko123@gmail.com",
        },
      })
    );
  };
  return (
    <div className="form__container">
      <h2>Заполните личную информацию</h2>

      <form>
        <div className="row">
          <Input elid="1" type={"text"} name={"Имя"} fullwidth={true} />
        </div>

        <div className="row">
          <Input elid="2" type={"text"} name={"Фамилия"} fullwidth={true} />
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
                />
                <span></span>
              </label>
            </div>
          </div>
        </div>

        <div className="column">
          <p className="input_name">Дата рождения</p>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="1923-01-01"
            max="2005-01-01"
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
