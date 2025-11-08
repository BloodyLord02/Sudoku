import { useSudokuGame } from "./hooks/useSudokuGame"
import StartPage from "./pages/StartPage"
import GamePage from "./pages/GamePage"
import ResultPage from "./pages/ResultPage"
import "./App.css"

export default function App() {
  const {page, grid, score, startGame, finishGame, restartGame, updateCell, initialGrid, error, giveHint, hints,} = useSudokuGame()

  if (page === "start") return <StartPage onStart={startGame} />
  if (page === "game") return ( <GamePage grid={grid} onFinish={finishGame} onChange={updateCell} initialGrid={initialGrid} error={error} onHint={giveHint} hints={hints}/>)
  if (page === "result") return <ResultPage score={score} onRestart={restartGame} />
  return null
}
