import './Club.css'
import GameCard from '../GameCard/GameCard'
import Header from '../header/Header'
import {useState} from "react"


const Club = ({ClubName,descripcion,videojuegos}) => {
  const [Joined,Set_Joined] = useState(false); 
  const text = Joined ? "Ya eres miembro" : "Unirse";
  const buttomClassName= Joined ? "join btn_Joined" : "join btn_no" ;
  const handleClick = () => {
    Set_Joined(!Joined)
  }

  return (
    <>
    
    <div><Header text=""/></div>
    <div className='info'>
      <div className='title_Club'>
          <h1>{ClubName}</h1>
      </div>
      <div className='desc'><p>{descripcion}</p></div>
      <button className={buttomClassName} onClick={handleClick}>{text}</button>
    </div>

    <div className='container_gamecards'>
      
    
      <div className='Cards'>
      {videojuegos.map((videojuego) => (
          <GameCard  
            key={videojuego.id}
            titulo={videojuego.nombre} 
            genero={videojuego.genero} 
            descripcion={videojuego.Descripcion}  
          />
        ))}
      </div>
    </div>
    
    
    
    
    
    
    </> 
  )
}

export default Club