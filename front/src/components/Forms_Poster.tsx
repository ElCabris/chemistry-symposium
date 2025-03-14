import React from 'react';

const PosterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="form-overlay">
      <h2>Formulario Poster</h2>
      <form>
        <input type="text" placeholder="Nombre Completo" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Institución Educativa" />
        <button type="submit">Enviar</button>
        <input type="hidden" name="Rol" value="Ponente Poster" />
      </form>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default PosterForm;