const VoiceSelector = ({ voices, selectedVoice, onVoiceChange }) => {
  const handleChange = (e) => {
    onVoiceChange(e.target.value);
  };

  return (
    <div className="voice-selector">
      <label htmlFor="voices">Select Voice:</label>
      <select id="voices" value={selectedVoice} onChange={handleChange}>
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;
