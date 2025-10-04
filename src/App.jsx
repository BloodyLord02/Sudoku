import { useState } from "react"
import StartPage from "./pages/StartPage"
import GamePage from "./pages/GamePage"
import ResultPage from "./pages/ResultPage"
import "./App.css"

export default function App() {
  const [page, setPage] = useState("start")

  if (page === "start") return <StartPage onStart={() => setPage("game")} />
  if (page === "game") return <GamePage onFinish={() => setPage("result")} />
  if (page === "result") return <ResultPage onRestart={() => setPage("start")} />

  return null
}
