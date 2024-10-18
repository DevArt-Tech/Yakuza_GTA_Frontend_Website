import './styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage'; // Importa tu página principal
import SignIn from './pages/sign-in/SignIn'; // Importar el formulario de Sign-in
import SignUp from './pages/sign-up/SignUp'; // Importar el formulario de Sign-up

const theme = createTheme({
    typography: {
        fontFamily: 'OnsenJapanRegular, Arial, sans-serif', // Cambia el nombre de la fuente aquí
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);
