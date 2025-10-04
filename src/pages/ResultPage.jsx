import Header from "../components/Header/Header"
import Button from "../components/Button/Button"

export default function ResultPage({ onRestart }) {
  return (
    <div className="page top-page">
      <Header title="Результати" />
      <p className="info">Рейтинг</p>
      <Button onClick={onRestart}>Грати знову</Button>
    </div>
  )
}
