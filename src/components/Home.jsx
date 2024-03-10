/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from 'C:/Users/Usuario/Desktop/Sistemas de Información/Microproyecto-2/firebase.js'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div>
      {/**LOGOUT */}
      <h2 className='text-center'>Bienvenido usuario {correoUsuario} <button className='btn btn-primary' onClick={() => signOut(auth)}>LogOut</button></h2>
    </div>
  )
}

export default Home