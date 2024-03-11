import ClubCard from "../ClubCard/ClubCard"
import Header from "../header/Header"
import "./Landing.css"

const clubes= [{"ID": "1","nombre": "club dinamita 3",
"descripcion" : "Rhola somos dinamit pura",
"videojuegos" : ["1","2","3"]},{"ID": "2","nombre": "club dinamita 3456hhg",
"descripcion" : "Rhola somos dinamit pura multiplicado por 3",
"videojuegos" : ["1","2"]}           
];
const Landing = () => {
  return (
    <>
    
    <div><Header text=" BIENVENIDO A LA DIMENSION GAMER ..." />
    </div>
    <div className="clubes_cards">
        {clubes.map((club)=> (
          <ClubCard 
          key= {club.ID}
          ClubName= {club.nombre}
          description = {club.descripcion}
          videojuegos = {club.videojuegos}
          
          />

        ))}
        

    </div>
    </>
  )
}

export default Landing