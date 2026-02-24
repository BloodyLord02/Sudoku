import Header from "../components/Header/Header"
import SudokuGrid from "../components/SudokuGrid/SudokuGrid"
import Button from "../components/Button/Button"
import Modal from "../components/Modal/Modal"
import { useState } from "react"

export default function GamePage({ onFinish, onRestart, onGoHome, grid, onChange, initialGrid, error, onHint }) {
  const [modalType, setModalType] = useState(null)
  const [lastScore, setLastScore] = useState(0)
  
  const handleFinish = () => {
    const score = onFinish()
    if (score !== false) {
      setLastScore(score)
      setModalType("finish")
    }
  }

  return (
    <div className="page top-page">
      <Header title="Game Page" />

      <SudokuGrid grid={grid} onChange={onChange} initialGrid={initialGrid} />

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <div className="mt-20 flex flex-col items-center gap-3">
        <Button onClick={handleFinish}>Завершити</Button>
        <Button onClick={onHint}>Підказка</Button>
        <Button onClick={() => setModalType("menu")}>Меню</Button>
      </div>

      <Modal isOpen={modalType !== null} type={modalType} score={lastScore}  onRestart={onRestart} onGoHome={onGoHome} onClose={() => setModalType(null)}/>
    </div>
  )
}