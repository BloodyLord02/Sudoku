import styles from "./SudokuGrid.module.css"

export default function SudokuGrid({ grid, onChange, initialGrid }) {
  return (
    <div className={styles.grid}>
      {grid.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map((value, j) => (
            <input key={j} className={`${styles.cell} ${ initialGrid[i][j] !== "" ? styles.preset : "" }`} value={value} onChange={(e) => onChange(i, j, e.target.value)} maxLength={1} disabled={initialGrid[i][j] !== ""}/>
          ))}
        </div>
      ))}
    </div>
  )
}
