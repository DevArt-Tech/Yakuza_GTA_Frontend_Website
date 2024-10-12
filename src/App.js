// src/pages/HomePage.js
import React, { useRef, useState, useEffect } from 'react';
import './styles/HomePage.css'; // Asegúrate de tener este archivo

const HomePage = () => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0); // Comenzamos con el volumen en 0

  // Función para ajustar el volumen
  const handleVolumeChange = (event) => {
    const volumeValue = event.target.value;
    setVolume(volumeValue);
    if (videoRef.current) {
      videoRef.current.volume = volumeValue;
    }
  };

  // Asegúrate de que el video se inicie automáticamente
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Iniciar el video
    }
  }, []);

  return (
    <div className="HomePage">
      {/* Video de fondo */}
      <video ref={videoRef} autoPlay loop muted id="background-video"> {/* Video silenciado inicialmente */}
        <source src="/intro.mp4" type="video/mp4" /> {/* Asegúrate de que la ruta sea correcta */}
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Barra de menú */}
      <div className="menu">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          onMouseUp={() => {
            if (videoRef.current) {
              videoRef.current.volume = volume; // Ajustar el volumen al soltar el slider
              videoRef.current.muted = volume === 0; // Silenciar si el volumen es 0
            }
          }}
        />
        <button className="menu-button entrar">Entrar</button>
        <button className="menu-button postular">Postular</button>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2024 - All rights reserved. ⛩️ Yakuza ⛩️ - La Palma 🌴.</p>
      </div>
    </div>
  );
}

export default HomePage;
