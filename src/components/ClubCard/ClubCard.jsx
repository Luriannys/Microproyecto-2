/* eslint-disable react/prop-types */
import './ClubCard.css'
import {IoLogoGameControllerB } from "react-icons/io";



const gamedicc = [{"id": "1","nombre": "the witcheeer",
"genero" : "RPG",
"Descripcion" : "un juego que te gustara bebe"                    
},{"id": "2","nombre": "tMARIC COLITAS",
"genero" : "RPM",
"Descripcion" : "un juego que NO te gustara bebe"                    
},{"id": "3","nombre": "fucccccking gamin parte 3",
"genero" : "lupus",
"Descripcion" : "un juego que te hara sonrojar  bebesuki"                    
} ];

const diccionarioVideojuegos = gamedicc.reduce((obj, videojuego) => {
  obj[videojuego.id] = videojuego;
  return obj;
}, {});

const ClubCard = ({ClubName, description, videojuegos}) => {
  return (
    <><div className='container'>
          <h3 className='title'>{ClubName}</h3>
          <IoLogoGameControllerB className='icon_'/>
          <div className='Description'>
              <p>{description}</p>
          </div>
          <div className='gaminn'><strong> Videojuegos: </strong>
            {videojuegos.map(id => (
            <p key={id}>{">"+" "+ diccionarioVideojuegos[id].nombre}</p>
        ))}
          </div>
      </div>
      
      
      </>

  )
 
  }
export default ClubCard