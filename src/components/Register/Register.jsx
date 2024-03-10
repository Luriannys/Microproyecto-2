import "./Register.css"
const logo = 'src/assets/89-896782_gamer-png.png'
import { FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SiGmail } from "react-icons/si"
import appFirebase from '../../credenciales.js'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)



const Register = () => {

  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    try {
      /**REGISTRAR USUARIO */
      await createUserWithEmailAndPassword(auth, correo, contraseña)
    } catch (error) {
      alert("Asegúrese que la contraseña tenga mas de 8 caracteres ")
    }
  }
    return (
      <div className='Register'>
        <img className="logo" src={logo} alt=" Logo" />
        <form className="form" action='' onSubmit={functAutentication}>
          <h1>Registro</h1>
          <div className='input'>
            <input className='input_box' type="text" placeholder="Nombre" required />
            <FaUser className='icon' />
          </div>
          <div className='input'>
            <input className='input_box' type="email" placeholder="Correo electrónico" id="email" required />
            <SiGmail className='icon' />
          </div>
          <div className='input'>
            <input className='input_box' type="Password" placeholder='Contraseña' id="password" required />

          </div>
          <button className='submit' type='submit'>Registrarse</button>
          <div className="login_link">
            <p>¿Ya tienes una cuenta? <a href='#'>Iniciar Sesión</a></p>
            <div className='goo_fc'>
              <button className="btn"><FcGoogle className="icon2" /></button>

            </div>
          </div>

        </form>

      </div>
    )
  }

export default Register