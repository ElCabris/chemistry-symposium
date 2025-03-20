import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <img src="/assets/logo.webp" alt="logo" onClick={() => { navigate("/") }} />
        </div>

        {/* Title in the center */}
        <div className="navbar-title" onClick={() => { navigate("/") }}>
          SIQUI 2025
        </div>

        {/* Navigation links on the right */}
        <div className="navbar-links">
          <div className="nav-item"><a href="#">Invitados</a></div>
          <div className="nav-item"><a href="#">Inscripción</a></div>
          <div className="nav-item"><a href="#">Contacto</a></div>
          <div className="nav-item"><a href="#">Ubicación</a></div>
          <div className="nav-item"><a href="#">Memorias</a></div>
          <div className="nav-item"><a href="#">Comités</a></div>
          <div className="nav-item"><a href="#">Cronograma</a></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
