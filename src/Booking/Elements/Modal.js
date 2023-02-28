import React from 'react';
import './../dist/Booking.css';

const Modal = ({active, setActive, text}) => {
        return (
            <div className={active ? "modal__container active" : "modal__container"} onClick={() => setActive(false)}>
                <div className="modal__content">
                  <p>{text}</p>
                </div>
            </div>
          )
}

export default Modal;