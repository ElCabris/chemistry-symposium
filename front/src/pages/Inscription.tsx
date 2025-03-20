import React, { useState } from 'react';
import './inscription.css';
import speaker from "/assets/speaker.jpg";
import assistant from "/assets/assistant.png";
import poster from "/assets/poster.jpg";
import SpeakerForm from '../components/Forms_Speaker';
import PosterForm from '../components/Forms_Poster';
import AssistantForm from '../components/Forms_Assistant';

const Inscription: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'speaker' | 'poster' | 'assistant' | null>(null);

  return (
    <div className="inscription-container">
      <h1 className="inscription-heading">Acá puedes participar como</h1>

      {/* Container for Rectangles and Images */}
      <div className="rectangles-wrapper">
        {/* Speaker Section */}
        <div className="rectangle-container">
          <div className="rectangle">
            <p className="rectangle-text">Ponente Speaker</p>
          </div>
          <img
            src={speaker}
            alt="Ponente Speaker"
            className="rectangle-image"
            onClick={() => setActiveForm('speaker')}
          />
        </div>

        {/* Poster Section */}
        <div className="rectangle-container">
          <div className="rectangle">
            <p className="rectangle-text">Ponente Poster</p>
          </div>
          <img
            src={poster}
            alt="Ponente Poster"
            className="rectangle-image"
            onClick={() => setActiveForm('poster')}
          />
        </div>

        {/* Assistant Section */}
        <div className="rectangle-container">
          <div className="rectangle">
            <p className="rectangle-text">Asistente</p>
          </div>
          <img
            src={assistant}
            alt="Asistente"
            className="rectangle-image"
            onClick={() => setActiveForm('assistant')}
          />
        </div>
      </div>

      {/* Conditionally Render Forms */}
      {activeForm === 'speaker' && (
        <SpeakerForm onClose={() => setActiveForm(null)} />
      )}

      {activeForm === 'poster' && (
        <PosterForm onClose={() => setActiveForm(null)} />
      )}

      {activeForm === 'assistant' && (
        <AssistantForm onClose={() => setActiveForm(null)} />
      )}
    </div> );
};

export default Inscription;
