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
          <div className="nav-item"><a onClick={() => navigate("/invitees")}>Invitados</a></div>
          <div className="nav-item"><a onClick={() => navigate("/register")}>Inscripción</a></div>
          <div className="nav-item"><a onClick={() => navigate("/")}>Contacto</a></div>
          <div className="nav-item"><a onClick={() => navigate("/location")}>Ubicación</a></div>
          <div className="nav-item"><a onClick={() => navigate("/")}>Memorias</a></div>
          <div className="nav-item"><a onClick={() => navigate("/")}>Comités</a></div>
          <div className="nav-item"><a onClick={() => navigate("/")}>Cronograma</a></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
