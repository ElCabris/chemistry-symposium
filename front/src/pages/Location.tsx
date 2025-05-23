import React from 'react';
import './location.css';

const Location: React.FC = () => {
  return (
    <div className="location-container">
      {/* Left Side: Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2436516604885!2d-75.61255342500957!3d6.231576693756585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44298d0551a085%3A0xd6c06b6158ba814d!2sUniversidad%20de%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1743790557531!5m2!1ses-419!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right Side: Content */}
      <div className="content-container">
        <h1 className="title">¿Cómo llegar a la UdeMedellin?</h1>
        <p className="text">
          ¡Llegar a Nuestro Campus Vivo es fácil! Toma la Línea 1 o 2 del Metroplus y bájate en la última parada: Universidad de Medellín. Si viajas en metro, haz transbordo en las estaciones Hospital, Cisneros o Industriales a la Línea 1 o 2 del Metroplus para un viaje sin complicaciones a nuestro campus.
          <br />
          <a
            href="https://upload.wikimedia.org/wikipedia/commons/b/be/Mapa_Metro_de_Medell%C3%ADn.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta el mapa del Metro de Medellín acá
          </a>
        </p>

        {/* Rectangle with Reminder */}
        <div className="reminder-rectangle">
          <p className="reminder-text">
            Recuerda que nuestro evento estará llevándose a cabo en el bloque 11 en los auditorios 1 y 2
          </p>
        </div>

        {/* University Map Image */}
        <div className="university-map-container">
          <img
            src="/assets/university_map_no_back.webp"
            alt="Mapa de la Universidad de Medellín"
            className="university-map"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
