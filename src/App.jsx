/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './App.css'
import { LOGIN_URL, REGISTER_URL, LANDING_URL } from "./constants/url";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Landing from './components/Principal_Page/Landing';

import { getAuth } from 'firebase/auth';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_URL} element={<Login />} />
        <Route path={REGISTER_URL} element={<Register />} />
        <Route path={LANDING_URL} element={<Landing />} />
        {/* Opcional: Ruta para página no encontrada */}
        {/* <Route path="*" element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



