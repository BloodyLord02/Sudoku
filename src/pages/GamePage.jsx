import Header from "../components/Header/Header"
import SudokuGrid from "../components/SudokuGrid/SudokuGrid"
import Button from "../components/Button/Button"
import Modal from "../components/Modal/Modal"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import styles from "../App.module.css"

export default function GamePage({ onFinish, grid, onChange, initialGrid, error, onHint,}) {
  const [showModal, setShowModal] = useState(false)
  const [lastScore, setLastScore] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()  
  const handleFinish = () => {
    const score = onFinish()
    if (score !== false) { 
      setLastScore(score)
      setShowModal(true)
    }
  }
  const goToResult = () => {
  navigate(`/result/${id}`, {
    state: { score: lastScore }
  })
}
  return (
    <div className={`${styles.page} ${styles.topPage}`}>
      <Header title="Sudoku Game" />
      <SudokuGrid grid={grid} onChange={onChange} initialGrid={initialGrid} />
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      <div className="mt-20 flex flex-col items-center gap-3">
        <Button onClick={handleFinish}>Завершити</Button>
        <Button onClick={onHint}>Підказка</Button>
      </div>
      <Modal isOpen={showModal} score={lastScore} onRestart={() => window.location.reload()} onClose={() => setShowModal(false)} onGoResult={goToResult}/>
    </div>
  )
}
