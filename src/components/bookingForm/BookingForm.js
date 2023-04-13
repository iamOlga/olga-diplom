import React, { useEffect } from "react";
import { useState } from "react";
import "../../pages/Booking/Booking.css";
import Input from "../input/Input";
import TextArea from "../bookingTextArea/TextArea";
import Select from "../bookingSelect/Select";
import Button from "../Button/Button";
import Modal from "../bookingModal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUserData, postFormData } from "../../redux/slices/userSlice";
import { clearUserState } from "../../redux/slices/userSlice";
import { getToursData } from "../../redux/slices/bookingSlice";



function BookingForm() {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [modalActive, setModalActive] = useState(false);
  const accountInfo = useSelector((state) => state.user.accountInfo);
  const userEmail = localStorage.getItem('userEmail');

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: accountInfo,
  });

  useEffect(() => {
    if (userEmail) dispatch(getUserData(`get_info?email=${userEmail}`));
    dispatch(getToursData('get_tours_select'));
    return () => dispatch(clearUserState());
  }, [dispatch]);

        useEffect(() => {
          if (accountInfo) {
            setValue("firstname", accountInfo.firstname);
            setValue("lastname", accountInfo.lastname);
            setValue("birthday", accountInfo.birthday);
            setValue("email", accountInfo.email);
            setValue("gender", accountInfo.gender);
          }
        }, [accountInfo, dispatch, setValue]);

      const onClickSubmitHandler = (data) => {
        dispatch(
          postFormData({
            targetUrl: "booking",
            body: data,
          })
        );
      };

  return (
    <div className="booking__container">
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text="Вы отправили заявку на следующий рейс в космос!"
      />

      <div className="booking">
        <div className="info_block">
          <h2>Персональная информация</h2>
          <form onSubmit={handleSubmit(onClickSubmitHandler)}>
            <div className="row">
              <Input
                type={"text"}
                title={"Имя"}
                placeholder={"Имя"}
                fullWidth={true}
                register={register("firstname")}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                title={"Фамилия"}
                placeholder={"Фамилия"}
                fullWidth={true}
                register={register("lastname")}
              />
            </div>

            <div className="row_gender">
              <p className="input_name">Пол:</p>
              <p>{accountInfo?.gender}</p>
            </div>

            <div className="column">
              <p className="input_name">Дата рождения</p>
              <input
                {...register("birthday", {})}
                type="date"
                id="start"
                name="trip-start"
                value={date}
                min="1923-01-01"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                title={"Электронный адрес"}
                placeholder={"Электронный адрес"}
                fullWidth={true}
                register={register("email")}
              />
            </div>
            <div className="row">
              <Input
                type={"text"}
                title={"Страна"}
                placeholder={"Страна"}
                fullWidth={false}
                register={register("country")}
              />
              <Input
                type={"text"}
                title={"Город"}
                placeholder={"Город"}
                fullWidth={false}
                register={register("city")}
              />
            </div>

            <div className="row">
              <Select name={"Куда вы хотите отправиться?"} fullwidth={true} />
            </div>

            <div className="row">
              <TextArea
                name={
                  "В нескольких словах расскажите о себе, о своём экстремальном опыте"
                }
                fullwidth={true}
                register={register("experience")}
              />
            </div>

            <div
              className="button_container"
              onClick={() => setModalActive(!modalActive)}
            >
              <Button className="button" value="Отправить запрос" isrow="row" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
