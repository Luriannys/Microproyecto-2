import GameCard from "../ClubCard/ClubCard"
import Header from "../header/Header"
import "./Landing.css"


const Landing = () => {
  return (
    <>
    
    <div><Header />
    </div>
    <div className="clubes_cards">
        <GameCard ClubName="LosLadrones" description="ESTOY LOCAACACACACACAA DIOS" videojuegos="este este y este"/>
        <GameCard ClubName="matenme" description="ESTOY LOCAACACACACACAA DIOS asdfghjkasfghjkasdfg" videojuegos="este este y este"/>
        <GameCard ClubName="Jesusssyaaaa" description="ESTOY LOCAACACACACACAA DIOS" videojuegos="este este y este y este "/>
        <GameCard ClubName="eimen" description="asdfghnjdfgnh" videojuegos="este este y este"/>

    </div>
    </>
  )
}

export default Landing