import '../css/modal.css';

function Modal({ message, noButton = false }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        {!noButton && <div className="button">확인</div>}
      </div>
    </div>
  );
}

export default Modal;
