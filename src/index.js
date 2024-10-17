import './styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage'; // Importa tu página principal

const theme = createTheme({
    typography: {
        fontFamily: 'OnsenJapanRegular, Arial, sans-serif', // Cambia el nombre de la fuente aquí
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <HomePage />
    </ThemeProvider>
);
