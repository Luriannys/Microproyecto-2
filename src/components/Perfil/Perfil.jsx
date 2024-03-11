import './Perfil.css';
import Header from '../header/Header';
import { FaUserCircle } from "react-icons/fa";
import { RiMapPinUserFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";



const Perfil = (UserName,UserApellido,UserVideogame) => {
  return (
    <>
    <Header text=" "/>
    <div className='container_user'>

    <FaUserCircle className='icono'/>
    <div className='saludo'>Datos de Usuario
    <RiMapPinUserFill className='icono2'/></div>
    <div className='divname'>Nombre: {" " +UserName}</div>
    <div>Apellido: {" " +UserApellido}</div>
    <FaGamepad className='icono3'/>
    <div className='videojuego_fav'>Videojuego Favorito: {" "+UserVideogame} </div>

    </div>
    <h4 className='h4'>Editar Perfil:</h4>
    <div className='modify'>
        <div className='Imput'>
        <label>Nombre: </label>
        <input className='imput_box' type="text" placeholder='Nombre' required/>
        </div>
        <div className='Imput'>
        <label>Apellido: </label>
        <input className='imput_box' type="text" placeholder='Apellido' required/>
        </div>
        <div className='Imput'>
        <label>Videojuego favorito: </label>
        <input className='imput_box' type="text" placeholder='Juego favorito' required/>
        </div>
    </div>
    <button className='btn_guardar'>Guardar Cambios</button>
    </>
  )
}

export default Perfil