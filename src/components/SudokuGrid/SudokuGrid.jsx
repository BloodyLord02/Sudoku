import "./SudokuGrid.css"

export default function SudokuGrid({ grid, onChange, initialGrid }) {
  return (
    <div className="sudoku-grid">
      {grid.map((row, i) => (
        <div key={i} className="sudoku-row">
          {row.map((value, j) => (
            <input key={j} className={`sudoku-cell ${initialGrid[i][j] !== "" ? "preset" : ""}`} value={value} onChange={(e) => onChange(i, j, e.target.value)} maxLength={1} disabled={initialGrid[i][j] !== ""}/> ))}
        </div>
      ))}
    </div>
  )
}
