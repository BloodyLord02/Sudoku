import { useSudokuGame } from "./hooks/useSudokuGame"
import StartPage from "./pages/StartPage"
import GamePage from "./pages/GamePage"
import ResultPage from "./pages/ResultPage"
import CookieBanner from "./components/CookieBanner/CookieBanner"
import "./App.css"

export default function App() {
  const {page, grid, score, startGame, finishGame, restartGame, updateCell, initialGrid, error, giveHint,} = useSudokuGame()

  return (
    <>
      {page === "start" && <StartPage onStart={startGame} />}
      {page === "game" && <GamePage grid={grid} onFinish={finishGame} onChange={updateCell} initialGrid={initialGrid} error={error} onHint={giveHint}  />}
      {page === "result" && <ResultPage score={score} onRestart={restartGame} />}
      <CookieBanner />
    </>
  )
}