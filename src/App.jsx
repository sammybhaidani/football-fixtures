import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}