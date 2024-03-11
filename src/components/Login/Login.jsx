import './Login.css';
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import appFirebase from '../../credenciales.js'
const auth = getAuth(appFirebase)
import { REGISTER_URL, LANDING_URL } from '../../constants/url.js'
import { useNavigate, Link } from 'react-router-dom';


const logo = 'src/assets/89-896782_gamer-png.png'

const Login = () => {

  const navigate = useNavigate();


  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    try {
      /**INICIAR USUARIO */
      await signInWithEmailAndPassword(auth, correo, contraseña)
      navigate(LANDING_URL);
    } catch (error) {
      alert("Asegúrese que la contraseña tenga mas de 8 caracteres "+ error)
    }
  }

  // Inicio con Google
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate(LANDING_URL) ;     // El usuario ha iniciado sesión correctamente
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };


  return (
    <div className='Log_in'>
      <img className="logo" src={logo} alt=" Logo" />
      <form action='' onSubmit={functAutentication}>
        <h1>Inicio de Sesión</h1>
        <div className='input'>
          <input className='input_box' type="email" placeholder='Correo Electrónico' id='email' required />
          <FaUser className='icon' />
        </div>
        <div className='input'>
          <input className='input_box' type="Password" placeholder='Contraseña' id='password' required />

        </div>
        <button className='submit' type='submit' >Iniciar Sesión</button>
        <div className="register_link">
          <p>¿No tienes una cuenta? </p>
          <Link className="textolink" to={REGISTER_URL}>
            Regístrate aquí
          </Link>
          <div className='goo_fc'>
            <button className="btn" onClick={handleLoginWithGoogle}>
              <FcGoogle className="icon2" />
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default Login