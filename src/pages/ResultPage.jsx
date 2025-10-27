import Header from "../components/Header/Header"
import Button from "../components/Button/Button"

export default function ResultPage({ onRestart, score }) {
  return (
    <div className="page top-page">
      <Header title="Результати" />
      <p className="info">Рейтинг {score}</p>
      <Button onClick={onRestart}>Грати знову</Button>
    </div>
  )
}
