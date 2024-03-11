import {useState, useEffect} from 'react';
import "./Register.css"
const logo = 'src/assets/89-896782_gamer-png.png'
import { FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { IoIosMail } from "react-icons/io"
import { IoGameController } from "react-icons/io5";
import { collection, getFirestore } from "firebase/firestore"


import { FaAt } from 'react-icons/fa'
import { FaUserFriends } from "react-icons/fa";
import appFirebase from '../../credenciales.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_URL, LANDING_URL } from '../../constants/url.js'
import { query, getDocs } from 'firebase/firestore';
const auth = getAuth()



const db = getFirestore(appFirebase);


const Register = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "videojuegos"));
      const querySnapshot = await getDocs(q);
      const titles = [];
      querySnapshot.forEach((doc) => {
        titles.push(doc.data().titulo);
      });
      setGames(titles);
    };
  
    fetchData();
  }, []);
  
  
  const Select = () => {
    const [selectedGame, setSelectedGame] = useState('');
  
    const handleChange = (e) => {
      setSelectedGame(e.target.value);
    };
  
    return (
      <select value={selectedGame} onChange={handleChange} className='select' defaultValue = "Videojuego favorito" >
        {games.map((game) => (
          <option key={game}>{game}</option>
        ))}
      </select>
    );
  };



  const navigate = useNavigate();

  // Inicio con Google
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate(LANDING_URL)
      // El usuario ha iniciado sesión correctamente
    } catch (error) {
      alert('Error al iniciar sesión con Google:' + error);
    }
  };

  const functAutentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    try {
      /**REGISTRAR USUARIO */
      await createUserWithEmailAndPassword(auth, correo, contraseña)
      navigate(LANDING_URL)
    } catch (error) {
      alert("Asegúrese que la contraseña tenga mas de 8 caracteres " + error)
    }
  }
  return (
    <div className='Register'>
      <img className="logo"
        src={logo}
        alt=" Logo" />


      <form className="form"
        onSubmit={functAutentication}>
        <h1>Registro</h1>

        <div className='input'>
          <input className='input_box'
            type="text"
            placeholder="Nombre"
            required />
          <FaUser className='icon' />
        </div>

        <div className="input">
          <input className='input_box'
            type="text"
            placeholder="Apellido"
            required />
          <FaUserFriends className="icon" />
        </div>

        <div className="input">
          <input className='input_box'
            type="text"
            placeholder="Username"
            required />
          <FaAt className="icon" />
        </div>

        

        <div className='input'>
          <input className='input_box'
            type="email"
            placeholder="Correo electrónico"
            id="email"
            required />
          <IoIosMail className="icon" />

        </div>

        <div className='input'>
          <input className='input_box'
            type="Password"
            placeholder='Contraseña'
            id="password"
            required />
        </div>

        <div className="input"
          id="games">
          <Select/>
          <IoGameController className="icon" />
        </div>

        <button className='submit'
          type='submit'>
          Registrarse
        </button>
        <div className="login_link">
          <p>¿Ya tienes una cuenta?</p>
          <Link className="textolink"
            to={LOGIN_URL}>
            Inicia sesión
          </Link>
          <div className='goo_fc'>
            <button className="btn"
              onClick={handleLoginWithGoogle}>
              <FcGoogle className="icon2" />
            </button>

          </div>
        </div>

      </form>

    </div>
  )
}

export default Register