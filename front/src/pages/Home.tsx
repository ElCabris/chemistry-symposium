import './home.css'
import { useNavigate } from 'react-router-dom'
import Gmail_icon from "/assets/Gmail_Logo.png"
import X_icon from "/assets/X.png"
import Ig_icon from "/assets/Instagram_logo.png"

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>II Simposio de Química UdeM</h1>
      <div className="button-container">
        <button onClick={() => { }} className="btn">
          Fechas Importantes
        </button>
        <button className="btn" onClick={() => navigate("/register")}>Regístrate ahora</button>
        <button onClick={() => { }} className="btn">
          Ubicación y Direcciones
        </button>
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
    </>

  );
}

export default Home;
