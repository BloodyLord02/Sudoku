import { useSudokuGame } from "../hooks/useSudokuGame"
import GamePage from "./GamePage"
import { useEffect } from "react"
import { useParams } from "react-router"

export default function GameWrapper() {
  const {grid, startGame, finishGame, updateCell, initialGrid, error, giveHint,} = useSudokuGame()
  const { id } = useParams()
  useEffect(() => {
    startGame()
  }, [])
  return (<GamePage grid={grid} onFinish={finishGame} onChange={updateCell} initialGrid={initialGrid} error={error} onHint={giveHint} userId={id}/>)
}
