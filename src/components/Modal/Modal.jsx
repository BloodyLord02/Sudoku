import ReactDOM from "react-dom"
import "./Modal.css"

export default function Modal({ isOpen, type, score, onRestart, onClose }) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="modal-overlay">
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
    </div>,
    document.body
  )
}