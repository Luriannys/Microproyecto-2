/* eslint-disable no-unused-vars */
import React from 'react'

const GameCard = (ClubName, description, videojuegos) => {
  return (
    <><div>
          <h3>{ClubName}</h3>
          <div className='Description'>
              <p>{description}</p>
          </div>
          <div>Videojuegos:
              {videojuegos}
          </div>
      </div>
      <div><button>Ver más</button></div>
      
      </>

  )
 
  }
export default GameCard