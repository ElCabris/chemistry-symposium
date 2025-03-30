import "./home.css";
import { useNavigate } from "react-router-dom";
import Gmail_icon from "/assets/gmail_logo.webp";
import X_icon from "/assets/x.webp";
import Ig_icon from "/assets/instragram_logo.webp";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
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
          <a href="mailto:siquiudem@udemedellin.edu.co">
            <img src={Gmail_icon} alt="Gmail" />
          </a>
          <a href="https://x.com/siquiudem" target="_blank">
            <img src={X_icon} alt="X" />
          </a>
          <a
            href="https://www.instagram.com/materialesconimpacto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <img src={Ig_icon} alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;