import React, { useState, useEffect } from 'react';
import VoiceSelector from './VoiceSelector';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
      if (voicesList.length > 0) setSelectedVoice(voicesList[2].name);
    };

    // Load voices
    loadVoices();

    // Ensure voices are loaded for some browsers
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const speakText = () => {
    if (!text.trim()) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    // Set selected voice
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) speech.voice = voice;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="text-to-speech">
      <h1>Text to Speech</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something here..."
      ></textarea>
      <VoiceSelector
        voices={voices}
        selectedVoice={selectedVoice}
        onVoiceChange={setSelectedVoice}
      />
      <button onClick={speakText}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
