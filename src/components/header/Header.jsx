/* eslint-disable react/prop-types */
import './Header.css'
const logo = 'src/assets/89-896782_gamer-png.png'
import appFirebase from '../../credenciales.js'
import { getAuth, signOut } from 'firebase/auth'
import { LOGIN_URL } from '../../constants/url.js'
import { useNavigate } from 'react-router-dom';
const auth = getAuth(appFirebase)

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      await signOut(auth);
      navigate(LOGIN_URL);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  

  return (
    <div className='head'>
      <img className="logo" src={logo} alt=" Logo" />
      <div >
        <h6 className="title1">  BIENVENIDO A LA DIMENSION GAMER ...</h6>
        <div className="Navbar">
          <li className='li'> <a href='#'>Inicio</a></li>
          <li className='li'> <a href='#'>Clubes</a></li>
          <li className='li'> <a href='#'>Perfil</a></li>
          <button className='li' onClick={handleLogout}>LogOut</button>
        </div>

      </div>
    </div>
  )
}

export default Header
