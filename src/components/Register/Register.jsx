import "./Register.css"
const logo = 'https://www.pngkey.com/png/full/89-896782_gamer-png.png';
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";

const Register = () => {
  return (
    <div className='Register'>
    <img className="logo" src={logo} alt=" Logo" />
     <form className="form"  action=''>
        <h1>Registro</h1>
        <div className='input'>
          <input className='input_box' type="text" placeholder="Nombre" required/>
          <FaUser className='icon'/>
        </div>
        <div className='input'>
          <input className='input_box' type="email" placeholder="Correo electrónico" required/>
          <SiGmail className='icon'/>
        </div>
        <div className='input'>
          <input className='input_box' type="Password" placeholder='Contraseña' required/>
          
        </div>
        <button className='submit' type='submit'>Registrarse</button>
        <div className="login_link">
          <p>¿Ya tienes una cuenta? <a href='#'>Iniciar Sesión</a></p>
          <div className='goo_fc'> 
            <button className="btn"><FcGoogle className="icon2"/></button>
            
          </div>
        </div>
        
     </form>

    </div>
  )
}

export default Register