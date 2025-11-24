import ReactDOM from "react-dom"
import styles from "./Modal.module.css"

export default function Modal({ isOpen, onClose, onRestart, onGoResult, score }) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.window}>
        <h2>Гру завершено!</h2>
        <p>Ваш результат: {score}</p>
        <div>
          <button onClick={onRestart}>Почати заново</button>
          <button onClick={onGoResult}>Перейти до рейтингу</button>
          <button onClick={onClose}>Закрити</button>
        </div>
      </div>
    </div>,
    document.body
  )
}
