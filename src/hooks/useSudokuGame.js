import { useState } from "react"

function isValid(grid, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num && i !== col) return false
    if (grid[i][col] === num && i !== row) return false
  }

  const startRow = Math.floor(row / 3) * 3
  const startCol = Math.floor(col / 3) * 3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const r = startRow + i
      const c = startCol + j
      if (grid[r][c] === num && (r !== row || c !== col)) return false
    }
  }

  return true
}

function generateFullSudoku(grid = Array.from({ length: 9 }, () => Array(9).fill("")), row = 0, col = 0) {
  if (row === 9) return true
  const nextRow = col === 8 ? row + 1 : row
  const nextCol = col === 8 ? 0 : col + 1
  const numbers = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5)

  for (let num of numbers) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num
      if (generateFullSudoku(grid, nextRow, nextCol)) return grid
      grid[row][col] = ""
    }
  }
  return false
}

function maskSudoku(fullGrid, cluesCount = 38) {
  const grid = fullGrid.map(row => [...row])
  let cellsToRemove = 81 - cluesCount

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * 9)
    const col = Math.floor(Math.random() * 9)
    if (grid[row][col] !== "") {
      grid[row][col] = ""
      cellsToRemove--
    }
  }
  return grid
}

export function useSudokuGame() {
  const [page, setPage] = useState("start")
  const [grid, setGrid] = useState([])
  const [initialGrid, setInitialGrid] = useState([])
  const [solution, setSolution] = useState([])
  const [score, setScore] = useState(0)
  const [error, setError] = useState("")

  const startGame = () => {
    const solved = generateFullSudoku()
    const puzzle = maskSudoku(solved, 38)
    setGrid(puzzle)
    setInitialGrid(puzzle.map(r => [...r]))
    setSolution(solved)
    setScore(0)
    setError("")
    setPage("game")
  }

  const checkIfSolvedCorrectly = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === "") {
          setError("Заповни всі клітинки перед завершенням!")
          return false
        }
        if (parseInt(grid[i][j]) !== solution[i][j]) {
          setError("Є помилки у заповненні Sudoku!")
          return false
        }
      }
    }
    return true
  }

  const finishGame = () => {
    if (!checkIfSolvedCorrectly()) return
    setError("")
    const filled = grid.flat().filter((x) => x !== "").length
    setScore(filled)
    setPage("result")
  }

  const restartGame = () => setPage("start")

  const updateCell = (row, col, value) => {
    if (initialGrid[row][col] !== "") return
    if (/^[1-9]?$/.test(value)) {
      setGrid(prev =>
        prev.map((r, i) =>
          r.map((c, j) => (i === row && j === col ? value : c))
        )
      )
    }
  }

  const giveHint = () => {
    const emptyCells = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === "") emptyCells.push([i, j])
      }
    }

    if (emptyCells.length === 0) return
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    const correctValue = solution[row][col]
    setGrid(prev =>
      prev.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? correctValue : c))
      )
    )
  }

  return { page, grid, score, startGame, finishGame, restartGame, updateCell, initialGrid, error, giveHint,}
}
