import './Login.css'
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import appFirebase from 'C:/Users/Usuario/Desktop/Sistemas de Información/Microproyecto-2/firebase.js'
const auth = getAuth(appFirebase)

const functAutentication = async (e) => {
  e.preventDefault();
  const correo = e.target.email.value;
  const contraseña = e.target.password.value;
  try {
    /**INICIAR SESIÓN */
    await signInWithEmailAndPassword(auth, correo, contraseña)
  } catch (error) {
    alert("El correo y/o contraseña son incorrectos")
  }
}

const logo = 'src/assets/89-896782_gamer-png.png'

const Login = () => {
  return (
    <div className='Log_in'>
      <img className="logo" src={logo} alt=" Logo" />
      <form action='' onSubmit={functAutentication} >
        <h1>Inicio de Sesión</h1>
        <div className='input'>
          <input className='input_box' type="email" placeholder='Correo Electrónico' id='email' required />
          <FaUser className='icon' />
        </div>
        <div className='input'>
          <input className='input_box' type="Password" placeholder='Contraseña' id='password' required />

        </div>
        <button className='submit' type='submit'>Iniciar Sesión</button>
        <div className="register_link">
          <p>¿No tienes una cuenta? <a href='#'>Regístrate</a></p>
          <div className='goo_fc'>
            <button className="btn"><FcGoogle className="icon2" /></button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default Login