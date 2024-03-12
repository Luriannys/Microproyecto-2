import './Perfil.css';
import Header from '../header/Header';
import { FaUserCircle } from "react-icons/fa";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import appFirebase from '../../credenciales';
import { getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);


const Perfil = (UserName, UserApellido, UserVideogame) => {

  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [displayLastName, setDisplayLastName] = useState('');
  const [game, setGame] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const docRef = doc(db, 'users', user);
  const docSnap = getDoc(docRef);

  if (docSnap.exists()) {
    const data = doc.data();
    setDisplayName(data.displayName);
    setDisplayLastName(data.apellido);
    setGame(data.videojuegoFavorito);
  }

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setDisplayLastName(event.target.value);
  };

  const handleGameChange = (event) => {
    setGame(event.target.value);
  };

  const handleSave = () => {
    const docRef = doc(db, 'usuarios', user);
    updateDoc(docRef, {
      "nombre": displayName,
      "apellido": displayLastName,
      "videojuegoFavorito": game,
    });
  };

  return (
    <>
      <Header text=" " />
      <div className='container_user'>

        <FaUserCircle className='icono' />
        <div className='saludo'>
          Datos de Usuario
          <RiMapPinUserFill className='icono2' /></div>
        <div className='divname'>
          Nombre: {" " + UserName}
        </div>
        <div>Apellido: {" " + UserApellido}
        </div>
        <FaGamepad className='icono3' />
        <div className='videojuego_fav'>Videojuego Favorito: {" " + UserVideogame} </div>

      </div>
      <h4 className='h4'>Editar Perfil:</h4>
      <div className='modify'>
        <div className='Imput'>
          <label>Nombre: </label>
          <input className='imput_box'
            value={displayName}
            onChange={handleDisplayNameChange}
            type="text" placeholder='Nombre' required />
        </div>
        <div className='Imput'>
          <label>Apellido: </label>
          <input className='imput_box'
            value={displayLastName}
            onChange={handleLastNameChange}
            type="text" placeholder='Apellido' required />
        </div>
        <div className='Imput'>
          <label>Videojuego favorito: </label>
          <input className='imput_box'
            value={game}
            onChange={handleGameChange}
            type="text" placeholder='Juego favorito' required />
        </div>
      </div>
      <button className='btn_guardar' onClick={handleSave}>Guardar Cambios</button>
    </>
  )
}

export default Perfil