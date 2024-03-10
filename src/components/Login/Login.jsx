import './Login.css'
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";




const logo = 'https://www.pngkey.com/png/full/89-896782_gamer-png.png';

 const Login = () => {
  return (
    <div className='Log_in'>
    <img className="logo" src={logo} alt=" Logo" />
     <form action=''>
        <h1>Inicio de Sesión</h1>
        <div className='input'>
          <input className='input_box' type="email" placeholder='Correo Electrónico' required/>
          <FaUser className='icon'/>
        </div>
        <div className='input'>
          <input className='input_box' type="Password" placeholder='Contraseña' required/>
          
        </div>
        <button className='submit' type='submit'>Iniciar Sesión</button>
        <div className="register_link">
          <p>¿No tienes una cuenta? <a href='#'>Regístrate</a></p>
          <div className='goo_fc'> 
            <button className="btn"><FcGoogle className="icon2"/></button>
          </div>
        </div>
        
     </form>

    </div>
  )
}

export default Login