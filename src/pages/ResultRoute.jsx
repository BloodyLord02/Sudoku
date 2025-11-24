import ResultPage from "./ResultPage"
import { useParams, useLocation, useNavigate } from "react-router"

export default function ResultWrapper() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const score = location.state?.score ?? 0

  const handleRestart = () => {
    navigate(`/game/${id}`)
  }

  const handleGoHome = () => {
    navigate("/")
  }

  return (<ResultPage score={score} onRestart={handleRestart} onGoHome={handleGoHome}/> )
}
