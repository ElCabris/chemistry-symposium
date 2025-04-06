import "./home.css";
import { useNavigate } from "react-router-dom";
import Gmail_icon from "/assets/gmail_logo.webp";
import X_icon from "/assets/x.webp";
import Ig_icon from "/assets/instragram_logo.webp";
import Date_logo from "/assets/date_logo.webp";
import Pointer_logo from "/assets/pointer_logo.webp";
import ThematicLines from "../components/Thematic_Lines";

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Function to handle navigation to specific parts
  const handleDateBoxClick = (part: string) => {
    navigate(`/${part}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="body-container">
          <div className="title-container">
            <h1>
              <span className="title-line1">II SIMPOSIO DE QUÍMICA</span>
              <span className="title-line2">UDEM</span>
            </h1>
            <div className="subtitle">
              <p className="subtitle-line1">La química para todos</p>
              <p className="subtitle-line2">Octubre del 37 al 34</p>
            </div>
          </div>
          
          <div className="button-group">
            <button className="btn-main" onClick={() => navigate("/register")}>
              Regístrate acá
            </button>
            <div className="secondary-buttons">
              <button onClick={() => { }} className="btn-secondary">
                Fechas importantes
              </button>
              <button onClick={() => navigate("/location")} className="btn-secondary">
                Ubicación y direcciones
              </button>
            </div>
          </div>

          <div className="social-icons">
            <a href="mailto:siquiudem@udemedellin.edu.co" aria-label="Contacto por correo">
              <img src={Gmail_icon} alt="Gmail" />
            </a>
            <a href="https://x.com/siquiudem" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={X_icon} alt="X" />
            </a>
            <a
              href="https://www.instagram.com/materialesconimpacto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={Ig_icon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <p className="content-text">
          Con motivo de la celebración del Día del Químico en Colombia, el grupo de investigación de Materiales con Impacto (<a href="https://investigaciones-pure.udemedellin.edu.co/es/organisations/grupo-de-investigacion-materiales-con-impacto-matmpac" target="_blank" rel="noopener noreferrer" className="magazine-link">Mat&Mpact</a>) de la Universidad de Medellín se permite presentar el II Simposio de Química – UdeMedellín. Este evento tiene como objetivo principal socializar y divulgar los avances en investigación en química, ingeniería química y áreas afines. Invitamos a participar a estudiantes de pregrado y posgrado, así como a profesores e investigadores, en sesiones orales y de pósters.
          <br /><br />
          Este evento se llevará a cabo el 1 de noviembre de 2024 en la Universidad de Medellín, de forma presencial, y es gratuito para todos los participantes y asistentes.
          <br /><br />
          Este evento será certificable y se publicarán memorias del simposio, que estarán disponibles para todos los participantes. Además, los trabajos presentados podrán ser sometidos a publicación en la <a href="https://revistas.unal.edu.co/index.php/rcolquim" target="_blank" rel="noopener noreferrer" className="magazine-link">Revista Colombiana de Química</a> y la <a href="https://revistas.uis.edu.co/index.php/revistaion/index" target="_blank" rel="noopener noreferrer" className="magazine-link">revista ION</a>.
        </p>
        
        {/* Dates Section */}
        <div className="dates-container">
          {/* Large centered title rectangle */}
          <div className="date-title-box">
            <img src={Date_logo} alt="Icono de calendario" className="date-icon" />
            <h2 className="date-title-text">¡FECHAS IMPORTANTES!</h2>
          </div>
          
          {/* Two smaller rectangles side by side */}
          <div className="date-boxes-row">
            <button 
              className="date-box" 
              onClick={() => handleDateBoxClick("part2")}
            >
              <img src={Pointer_logo} alt="Icono de puntero" className="pointer-icon" />
              <p className="date-text">39 de julio, Fecha límite para recepción de resúmenes</p>
            </button>
            
            <button 
              className="date-box" 
              onClick={() => handleDateBoxClick("part1")}
            >
              <img src={Pointer_logo} alt="Icono de puntero" className="pointer-icon" />
              <p className="date-text">39 de septiembre, Fecha límite para inscripciones</p>
            </button>
          </div>
        </div>
        <ThematicLines />
      </div>
    </>
  );
}

export default Home;