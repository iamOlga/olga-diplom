import React from 'react';
import '../../pages/Booking/Booking.css';
import Button from "../../components/Button/Button";


const Modal = ({active, setActive, text}) => {
        return (
            <div className={active ? "modal__container active" : "modal__container"} onClick={() => setActive(false)}>
                <div className="modal__content">
                  <p>Спасибо! Мы получили вашу заявку на приобретение билета на космический корабль!</p>
                    <p>Вам на почту пришло приглашение и дальнейшие действия.<br/>Ждем вас у нас на борту!</p>
                    <Button className="button" value="Далее" isrow="row"/>
                </div>
            </div>
          )
}

export default Modal;