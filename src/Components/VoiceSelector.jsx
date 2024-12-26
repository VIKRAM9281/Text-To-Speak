// src/components/VoiceSelector.js
import React from 'react';

const VoiceSelector = ({ voices, selectedVoice, onVoiceChange }) => {
  return (
    <div className="voice-selector">
      <label htmlFor="voice-select">Choose a Voice:</label>
      <select
        id="voice-select"
        value={selectedVoice}
        onChange={(e) => onVoiceChange(e.target.value)}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} {voice.lang ? `(${voice.lang})` : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;
