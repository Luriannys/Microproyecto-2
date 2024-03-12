import { useState, useEffect } from 'react';
import "./Register.css";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaAt } from 'react-icons/fa';
import { FaUserFriends } from "react-icons/fa";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_URL, LANDING_URL } from '../../constants/url.js';
import { query, getDocs } from 'firebase/firestore';
import appFirebase from '../../credenciales.js'
import Usuario from '../../models/usuario.js';



const auth = getAuth()
const logo = 'src/assets/89-896782_gamer-png.png'


const db = getFirestore(appFirebase);


const Register = () => {

  const [games, setGames] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const navigate = useNavigate();


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
      <select value={selectedGame} onChange={handleChange} className='select' >
        {games.map((game) => (
          <option key={game}>{game}</option>
        ))}
      </select>
    );
  };




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

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !username || !email || !password || !selectedGame) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const nuevoUsuario = new Usuario(nombre, apellido, username, email, selectedGame);
      
      await addDoc(collection(db, 'usuarios'), {
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        username: nuevoUsuario.username,
        email: nuevoUsuario.email,
        videojuegoFavorito: nuevoUsuario.videojuegofav,
      });
      console.log(nuevoUsuario);
      navigate(LANDING_URL);
    } catch (error) {
      alert("Asegúrese que la contraseña tenga mas de 8 caracteres " + error);
    }
  };

  return (
    <div className='Register'>
      <img className="logo"
        src={logo}
        alt=" Logo" />


      <form className="form"
        onSubmit={handleRegistration}>
        <h1>Registro</h1>

        <div className='input'>
          <input className='input_box'
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            required />
          <FaUser className='icon' />
        </div>

        <div className="input">
          <input className='input_box'
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            required />
          <FaUserFriends className="icon" />
        </div>

        <div className="input">
          <input className='input_box'
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required />
          <FaAt className="icon" />
        </div>



        <div className='input'>
          <input className='input_box'
            type="email"
            placeholder="Correo electrónico"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required />
          <IoIosMail className="icon" />

        </div>

        <div className='input'>
          <input className='input_box'
            type="Password"
            placeholder='Contraseña'
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>

        <div className="input"
          id="games"
          onChange={(e) => setSelectedGame(e.target.value)}>
          <Select />
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
