import React from 'react';
import './dist/Modal.css'

const Modal = ({active, setActive}) => {

  return (
    <div className={active ? "modal__container active" : "modal__container"} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <p>frtgh</p>
        </div>
    </div>
  )
}

export default Modal;