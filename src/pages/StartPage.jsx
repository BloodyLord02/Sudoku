import Header from "../components/Header/Header"
import Button from "../components/Button/Button"

export default function StartPage({ onStart }) {
  return (
    <div className="page center-page">
      <Header title="Sudoku Game" />
      <Button onClick={onStart}>Почати гру</Button>
    </div>
    
  )
}
