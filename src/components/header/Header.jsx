/* eslint-disable react/prop-types */
import './Header.css'
const logo = 'src/assets/89-896782_gamer-png.png'
import appFirebase from '../../credenciales.js'
import { getAuth, signOut } from 'firebase/auth'
import { LANDING_URL, LOGIN_URL, GAMES_URL, PROFILE_URL } from '../../constants/url.js'
import { Link, useNavigate } from 'react-router-dom';
const auth = getAuth(appFirebase)

const Header = ({text}) => {

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
      <div>
        <h6 className="title1"> {text}</h6>
        <div className="Navbar">
          <li className='li'> 
          <Link className="textolink" to={LANDING_URL}>
            Inicio
          </Link></li>
          <li className='li'>
          <Link className="textolink" to={GAMES_URL}>
            Juegos
          </Link>
        </li>
          <li className='li'> 
          <Link className="textolink" to={PROFILE_URL}>
            Perfil
          </Link>
          </li>
          <button className='li' onClick={handleLogout}>LogOut</button>
        </div>

      </div>
    </div>
  )
}

export default Header
