import { BrowserRouter, Routes, Route } from "react-router"
import StartPage from "./pages/StartPage"
import GameRoute from "./pages/GameRoute"
import ResultRoute from "./pages/ResultRoute"
import styles from "./App.module.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game/:id" element={<GameRoute />} />
        <Route path="/result/:id" element={<ResultRoute />} />
      </Routes>
    </BrowserRouter>
  )
}
