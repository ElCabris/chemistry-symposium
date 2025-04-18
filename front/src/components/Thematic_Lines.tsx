import "./thematic_lines.css";

const ThematicLines = () => {
  return (
    <div className="thematic-container">
      {/* Header rectangle */}
      <div className="thematic-header">
        <img 
          src="/assets/thematic_lines_logo.webp" 
          alt="Líneas Temáticas Logo" 
          className="thematic-logo"
        />
        <h2 className="thematic-title">LÍNEAS TEMÁTICAS</h2>
      </div>

      {/* Thematic lines grid */}
      <div className="thematic-grid">
        {/* Row 1 */}
        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Química Ambiental y Sostenibilidad</h3>
          </div>
          <p className="card-text">
            Explora soluciones innovadoras para reducir el impacto ambiental de procesos químicos, promoviendo el desarrollo sostenible y el uso responsable de los recursos.
          </p>
        </div>

        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Productos Naturales y Alimentos</h3>
          </div>
          <p className="card-text">
            Estudia compuestos bioactivos, seguridad alimentaria y nuevas tecnologías para el aprovechamiento sostenible de productos naturales en la industria alimentaria.
          </p>
        </div>

        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Simulaciones</h3>
          </div>
          <p className="card-text">
            Utiliza modelos teóricos y herramientas computacionales para predecir propiedades químicas y optimizar procesos experimentales en diversas áreas de la química.
          </p>
        </div>

        {/* Row 2 */}
        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Enseñanza de la Química</h3>
          </div>
          <p className="card-text">
            Analiza estrategias didácticas, recursos innovadores y nuevas metodologías para mejorar la enseñanza y el aprendizaje de la química en distintos niveles educativos.
          </p>
        </div>

        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Química de Materiales</h3>
          </div>
          <p className="card-text">
            Investiga el diseño y la síntesis de nuevos materiales con propiedades avanzadas para aplicaciones en energía, electrónica, salud y más.
          </p>
        </div>

        <div className="thematic-card">
          <div className="card-title-box">
            <h3>Bioaplicaciones</h3>
          </div>
          <p className="card-text">
            Desarrolla herramientas químicas para aplicaciones biomédicas, desde nuevos fármacos hasta biomateriales y técnicas analíticas para el estudio de sistemas biológicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThematicLines;