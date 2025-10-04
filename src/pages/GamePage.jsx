import Header from "../components/Header/Header"
import SudokuGrid from "../components/SudokuGrid/SudokuGrid"
import Button from "../components/Button/Button"

export default function GamePage({ onFinish }) {
  return (
    <div className="page top-page">
      <Header title="Sudoku Game" />
      <SudokuGrid />
      <div className="mt-20">
        <Button onClick={onFinish}>Завершити</Button>
      </div>
    </div>
  )
}
