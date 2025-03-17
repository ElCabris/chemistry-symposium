import React from 'react';
import './Forms_Poster.css'

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
          <input type="hidden" name="Rol" value="Ponente Poster" />
        </div>
        <div className="input-group">
          <button type="button" onClick={handleDownload} className="download-button">
            Descargar Documento Poster (.docx)
          </button>
        </div>
        <div className="input-group">
          <button type="submit" className="submit-button">Enviar</button>
        </div>
      </form>
      <button onClick={onClose} className="close-button">Cerrar</button>
    </div>
  );
};

export default PosterForm;