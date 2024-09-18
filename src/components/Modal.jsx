import { useState } from "react";
import style from "./css/modal.module.css";

function Modal({ message, noButton = false }) {
  const [modalOff, setModalOff] = useState("");
  const handleClick = () => setModalOff(style.off);

  return (
    <div className={`${style.modal} ${modalOff}`}>
      <div className={`${style["modal-content"]}`}>
        <p>{message}</p>
        {!noButton && (
          <div className={`${style.button} button`} onClick={handleClick}>
            확인
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
