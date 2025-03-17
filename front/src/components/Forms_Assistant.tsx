import React from 'react';
import './Forms_Poster.css';

const AssistantForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="form-container">
      <h2>Formulario Asistente</h2>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Nombre Completo" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Institución Educativa" required />
        </div>
        <div className="input-group">
          <input type="hidden" name="Rol" value="Asistente" />
        </div>
        <div className="input-group">
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>
      <button onClick={onClose} className="close-button">Cerrar</button>
    </div>
  );
};

export default AssistantForm;