import './ClubCard.css'
import {IoLogoGameControllerB } from "react-icons/io";




const GameCard = ({ClubName, description, videojuegos}) => {
  return (
    <><div className='container'>
          <h3 className='title'>{ClubName}</h3>
          <IoLogoGameControllerB className='icon_'/>
          <div className='Description'>
              <p>{description}</p>
          </div>
          <div>Videojuegos:
              {videojuegos}
          </div>
      </div>
      
      
      </>

  )
 
  }
export default GameCard