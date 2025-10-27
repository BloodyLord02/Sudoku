import Header from "../components/Header/Header"
import SudokuGrid from "../components/SudokuGrid/SudokuGrid"
import Button from "../components/Button/Button"

export default function GamePage({ onFinish, grid, onChange, initialGrid, error, onHint,}) {
  return (
    <div className="page top-page">
      <Header title="Sudoku Game" />
      <SudokuGrid grid={grid} onChange={onChange} initialGrid={initialGrid} />
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      <div className="mt-20 flex flex-col items-center gap-3">
        <Button onClick={onFinish}>Завершити</Button>
        <Button onClick={onHint}>Підказка</Button>
      </div>
    </div>
  )
}
