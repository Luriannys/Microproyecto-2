/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Imagen from '../assets/control.jpg'
import ImageProfile from '../assets/profile.jpg'

import appFirebase from 'C:/Users/Usuario/Desktop/Sistemas de Información/Microproyecto-2/firebase.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
  const [registrando, setResgistrando] = useState(false)

  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando){
      try{
        /**REGISTRAR USUARIO */
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      } catch (error){
        alert("Asegures que la contraseña tenga mas de 8 caracteres ")
      }
    }
    else{
      try{
        /**INICIAR SESIÓN */
        await signInWithEmailAndPassword(auth, correo, contraseña)
      } catch(error){
        alert("El correo y/o contraseña son incorrectos")
      }
      
    }
  }

  return (
    <div className='container'>

      <div className="row">
        {/*Columna pequeña*/}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImageProfile} alt="" className='estilo-profile' />
              <form onSubmit={functAutentication}>
                <input type="text" placeholder='Ingresar email' className='cajatexto' id='email' />
                <input type="password" placeholder='Ingresar contraseña' className='cajatexto' id='password' />
                <button className='btnform'>{registrando ? "Regístrate" : "Inicia Sesión"}</button>
              </form>
              <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button onClick={() => setResgistrando(!registrando)} className='btnswitch'>{registrando ? "Inicia sesión" : "Regístrate"}</button></h4>
            </div>
          </div>
        </div>
        {/**Columna grande */}
        <div className="col-md-8">
          <img src={Imagen} alt="" className='tamaño-imagen' />
        </div>
      </div>

    </div>
  )
}

export default Login