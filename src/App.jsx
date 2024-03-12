/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './App.css'
import { LOGIN_URL, REGISTER_URL, LANDING_URL, CLUB_URL, GAMES_URL, PROFILE_URL } from "./constants/url";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Landing from './components/Principal_Page/Landing';
import Club from "./components/Club/Club";
import Browser from './components/Browser/Browser';
import Perfil from './components/Perfil/Perfil';

import { getAuth } from 'firebase/auth';

 /*const videogames=[{"id": "1","nombre": "the witcheeer",
  "genero" : "RPG",
  "Descripcion" : "un juego que te gustara bebe"                    
  },{"id": "2","nombre": "tMARIC COLITAS",
  "genero" : "RPM",
  "Descripcion" : "un juego que NO te gustara bebe"                    
  },{"id": "3","nombre": "fucccccking gamin parte 3",
  "genero" : "lupus",
  "Descripcion" : "un juego que te hara sonrojar  bebesuki"                    
  } ];

  Ejemplo para club view <Club ClubName="Club supernenas" descripcion="bienvenido a este maravilloso club jajajjajajaa disfrutalo nene" videojuegos={videogames}/>*/
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_URL} element={<Login />} />
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path={LANDING_URL} element={<Landing />} />
        <Route path={CLUB_URL} element={<Club />} />
        <Route path={GAMES_URL} element={<Browser />} />
        <Route path={PROFILE_URL} element={<Perfil />} />
        <Route path={CLUB_URL} element={<Club />} />
        {/* Opcional: Ruta para página no encontrada */}
        {/* <Route path="*" element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



