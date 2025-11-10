import ReactDOM from "react-dom"
import "./Modal.css"

export default function Modal({ isOpen, onClose, onRestart, score }) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-window">
        <h2>Гру завершено!</h2>
        <p>Ваш результат: {score}</p>
        <div className="buttons">
          <button onClick={onRestart}>Почати заново</button>
          <button onClick={onClose}>Закрити</button>
        </div>
      </div>
    </div>,
    document.body
  )
}
