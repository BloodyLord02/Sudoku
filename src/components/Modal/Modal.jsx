import ReactDOM from "react-dom"
import "./Modal.css"

export default function Modal({ isOpen, type, score, onRestart, onClose, usePortal = true }) {
  if (!isOpen) return null;

  const content = (
    <div className="modal-window">
      {type === "finish" && (
        <>
          <h2>Гру завершено!</h2>
          <p>Ваш результат: {score}</p>
          <div className="buttons">
            <button onClick={onRestart}>Почати заново</button>
            <button onClick={onClose}>Закрити</button>
          </div>
        </>
      )}
      {type === "menu" && (
        <>
          <h2>Меню гри</h2>
          <div className="buttons">
            <button onClick={onRestart}>Почати нову гру</button>
            <button onClick={onClose}>Продовжити гру</button>
          </div>
        </>
      )}
    </div>
  );

  return usePortal ? ReactDOM.createPortal(
    <div className="modal-overlay">{content}</div>,
    document.body
  ) : <div className="modal-overlay">{content}</div>;
}