import Header from './components/header/Header.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Landing from './components/Principal_Page/Landing.jsx';
import Club from './components/Club/Club.jsx';
import Browser from './components/Browser/Browser.jsx';
import GameCard from './components/GameCard/GameCard.jsx';
import Perfil from './components/Perfil/Perfil.jsx'
import "./App.css";

function App() {
 
  /*const videogames=[{"id": "1","nombre": "the witcheeer",
  "genero" : "RPG",
  "Descripcion" : "un juego que te gustara bebe"                    
  },{"id": "2","nombre": "tMARIC COLITAS",
  "genero" : "RPM",
  "Descripcion" : "un juego que NO te gustara bebe"                    
  },{"id": "3","nombre": "fucccccking gamin parte 3",
  "genero" : "lupus",
  "Descripcion" : "un juego que te hara sonrojar  bebesuki"                    
  } ];

  Ejemplo para club view <Club ClubName="Club supernenas" descripcion="bienvenido a este maravilloso club jajajjajajaa disfrutalo nene" videojuegos={videogames}/>*/

  return (
    <>
      <Perfil/>
    </>
  )
}


export default App
