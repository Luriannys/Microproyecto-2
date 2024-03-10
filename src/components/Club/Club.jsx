import './Club.css'
import GameCard from '../GameCard/GameCard'


const Club = ({ClubName,descripcion,videojuegos}) => {
  return (
    <>
    <div><Header/></div>
    <div>
        <h1>{ClubName}</h1>
    </div>
    <div><p>{descripcion}</p></div>
    <div>
      <GameCard titulo="HADES" genero="Roguelike" descripcion="Embarcate en un viaje al inframudo y desafia y bla bla bla"/> 
      <GameCard titulo="Mario" genero="bello" descripcion="Embarcate en un viaje al insfzdxhgjfmhkuframudo y desafia y bla bla bla"/>   
      <GameCard titulo="BROOS" genero="locuraaa" descripcion="Embarcate en un viaje al iderfgbrdfhgrdfhnframudo y desafia y bla bla bla"/>   
      <GameCard titulo="JEEESUS" genero="maikike" descripcion="Embarcate en un viaje al asdfbghcyjmu.linframudo y desafia y bla bla bla"/>     
    </div>
    <button>UNIRSE</button>
    </> 
  )
}

export default Club