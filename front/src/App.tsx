import Inscription from "./pages/Inscription.tsx";
import Home from "./pages/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import Location from './pages/Location.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router >
  );
}

export default App
