// src/pages/HomePage.js
import React, { useRef, useState, useEffect } from 'react';
import './styles/HomePage.css'; // Asegúrate de tener este archivo
import { Link } from 'react-router-dom';
import { Slider, IconButton, Button } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const HomePage = () => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0); // Comenzamos con el volumen en 0

  // Función para ajustar el volumen
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (videoRef.current) {
      videoRef.current.volume = newValue;
      videoRef.current.muted = newValue === 0; // Silenciar si el volumen es 0
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play(); // Iniciar el video automáticamente
    }
  }, []);

  return (
    <div className="HomePage">
      {/* Video de fondo */}
      <video ref={videoRef} autoPlay loop muted id="background-video">
        <source src="/intro.mp4" type="video/mp4" /> {/* Asegúrate de que la ruta sea correcta */}
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Barra de menú */}
      <div className="menu">
        {/* Contenedor de las imágenes */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="image-container">
            <img src="/yakuza-logo-circular.PNG" alt="Left" className="image-left" />
            <img src="/yakuza-logo.png" alt="Right" className="image-right" />
          </div>
        </Link>

        {/* Control de volumen */}
        <div className="volume-slider-container">
          <IconButton 
            aria-label="decrease volume" 
            onClick={() => handleVolumeChange(null, Math.max(volume - 0.1, 0))}
          >
            <VolumeDownIcon className="volume-icon" />
          </IconButton>

          <Slider
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={1}
            step={0.1}
            className="volume-slider"
            aria-labelledby="continuous-slider"
            sx={{
              color: 'red', // Cambia el color aquí
              '& .MuiSlider-thumb': {
                backgroundColor: 'black', // Color del "thumb" (control deslizante)
              },
              '& .MuiSlider-track': {
                backgroundColor: 'red', // Color de la pista
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'gray', // Color de la pista de fondo
              },
            }}
          />

          <IconButton 
            aria-label="increase volume" 
            onClick={() => handleVolumeChange(null, Math.min(volume + 0.1, 1))}
          >
            <VolumeUpIcon className="volume-icon" />
          </IconButton>
        </div>

        <div className="image-container">
          <img src="/logo-la-palma.png" alt="Right" className="image-right" />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <Button variant="contained" className="menu-button entrar">Entrar</Button>
        <Button variant="contained" className="menu-button postular">Postular</Button>
      </div>
    </div>
  );
};

export default HomePage;
