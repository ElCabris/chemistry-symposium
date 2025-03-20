import React from 'react';
import './Forms_Assistant.css';

const AssistantForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="form-container">
      <h2>Formulario Asistente</h2>
      <form>
        {/* Nombre Completo */}
        <div className="input-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" placeholder="Nombre Completo" required />
        </div>

        {/* Rol*/}
        <div className="input-group">
          <label htmlFor="rol">Rol</label>
          <input
            type="text"
            id="rol"
            name="rol"
            value="Asistente"
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

export default AssistantForm;