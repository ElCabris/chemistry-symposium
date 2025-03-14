import React from 'react';

const AssistantForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="form-overlay">
      <h2>Formulario Asistente</h2>
      <form>
        <input type="text" placeholder="Nombre Completo" />
        <input type="email" placeholder="Email" />
        <button type="submit">Enviar</button>
        <input type="hidden" name="Rol" value="Asistente" />
      </form>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default AssistantForm;