import React from 'react';
import './Forms_Poster.css';

const PosterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleDownload = () => {
    // Replace with the actual path to your .docx file
    const fileUrl = '/path/to/your/document.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'TemplatePoster.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="form-container">
      <h2>Formulario Poster</h2>
      <form>
        {/* Nombre Completo */}
        <div className="input-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" placeholder="Nombre Completo" required />
        </div>

        {/* Rol (Read-only) */}
        <div className="input-group">
          <label htmlFor="rol">Rol</label>
          <input
            type="text"
            id="rol"
            name="rol"
            value="Ponente Poster"
            readOnly
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>

        {/* Universidad o Institución de Afiliación */}
        <div className="input-group">
          <label htmlFor="institucion">Universidad o Institución de Afiliación</label>
          <input type="text" id="institucion" placeholder="Universidad o Institución de Afiliación" required />
        </div>

        {/* Dropdown "Posición en su Institución" */}
        <div className="input-group">
          <label htmlFor="position">Posición en su Institución</label>
          <select id="position" name="position" required>
            <option value="" disabled selected>
              Seleccione una opción
            </option>
            <option value="estudiante de pregrado">Estudiante de pregrado</option>
            <option value="estudiante de posgrado">Estudiante de posgrado</option>
            <option value="profesor">Profesor</option>
            <option value="investigador">Investigador</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Dropdown "Línea temática en la que participará" */}
        <div className="input-group">
          <label htmlFor="theme">Línea temática en la que participará</label>
          <select id="theme" name="theme" required>
          <option value="" disabled selected>
              Seleccione una opción
            </option>
            <option value="uno">Química ambiental y sostenibilidad</option>
            <option value="dos">Productos naturales y alimentos</option>
            <option value="tres">Simulaciones computacionales</option>
            <option value="cuatro">Enseñanza de la química</option>
            <option value="cinco">Química de materiales</option>
            <option value="seis">Bioaplicaciones</option>
            <option value="siete">Otro</option>
          </select>
        </div>

        {/* Download Button */}
        <div className="input-group">
          <button type="button" onClick={handleDownload} className="download-button">
            Descargar Documento (.docx)
          </button>
        </div>

        {/* Submit Button */}
        <div className="input-group">
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>

      {/* Close Button */}
      <button onClick={onClose} className="close-button">Cerrar</button>
    </div>
  );
};

export default PosterForm;