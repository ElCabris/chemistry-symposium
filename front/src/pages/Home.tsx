import './home.css'
import Gmail_icon from "/assets/Gmail_Logo.png"
import X_icon from "/assets/X.png"
import Ig_icon from "/assets/Instagram_logo.png"

function Home(){
    return (
        <>
  <h1>II Simposio de Química UdeM</h1>
  <div className="button-container">
    <a href="important-dates.html" className="btn">
      Fechas Importantes
    </a>
    <a href="registration.html" className="btn">
      Regístrate ahora
    </a>
    <a href="location.html" className="btn">
      Ubicación y Direcciones
    </a>
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
