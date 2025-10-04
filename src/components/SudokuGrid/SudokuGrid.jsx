import "./SudokuGrid.css"

export default function SudokuGrid() {
  return (
    <div className="sudoku-grid">
      {Array.from({ length: 9 }).map((row) => (
        <div key={row} className="sudoku-row">
          {Array.from({ length: 9 }).map((col) => (
            <div key={col} className="sudoku-cell"></div>
          ))}
        </div>
      ))}
    </div>
  )
}
  