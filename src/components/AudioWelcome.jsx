import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioWelcome() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVoice = () => {
    if (!('speechSynthesis' in window)) {
      alert("Browser speech synthesizer not supported");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const message = new SpeechSynthesisUtterance(
      "Hello and welcome to my portfolio! I'm Rizvana, a software engineering undergraduate and backend developer specializing in Spring Boot and enterprise software solutions. Feel free to explore my services, latest projects, and connect with me!"
    );
    message.rate = 0.95;
    message.pitch = 1.05;

    message.onend = () => setIsPlaying(false);
    message.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(message);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handlePlayVoice}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#242b38]/90 border border-[#00eeff] text-[#00eeff] shadow-[0_0_20px_#00eeff40] hover:scale-105 backdrop-blur-md transition duration-300 text-xs font-bold"
        title="Listen to Welcome Voice Intro"
      >
        {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
        <span>{isPlaying ? "Mute Voice" : "Audio Intro 🎙️"}</span>
        {isPlaying && (
          <div className="flex gap-0.5 items-end h-3">
            <div className="w-1 bg-[#00eeff] animate-bounce h-3 rounded-full" />
            <div className="w-1 bg-[#00eeff] animate-bounce h-2 rounded-full delay-75" />
            <div className="w-1 bg-[#00eeff] animate-bounce h-3.5 rounded-full delay-150" />
          </div>
        )}
      </button>
    </div>
  );
}