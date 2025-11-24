import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import styles from "../App.module.css"

export default function ResultPage({ onRestart, onGoHome, score }) {
  return (
    <div className={`${styles.page} ${styles.topPage}`}>
      <Header title="Результати" />
      <p className="info">Рейтинг {score}</p>
      <Button onClick={onRestart}>Грати знову</Button>
      <Button onClick={onGoHome}>Головне меню</Button>
    </div>
  )
}
