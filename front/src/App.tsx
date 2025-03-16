import Inscription from "./pages/Inscription.tsx";
import Home from "./pages/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Inscription />} />
      </Routes>
    </Router >
  )
}

export default App
