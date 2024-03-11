
import { RiGameFill } from "react-icons/ri";
import "./GameCard.css";

const GameCard = ({titulo,genero,descripcion}) => {
  return (
    <div className='Game_container'>
      <div className="t"><h3>{titulo}</h3></div>
      <RiGameFill className="icon__"/>
      <div className="int">
        <div className='Genre'>
              <p><strong>Género:</strong>{" " +genero}</p>
        </div>
        <div className="Descript">
            <p>{"'" +descripcion+"'"}</p>
        </div>
        </div>

    </div>
  );
};


 

export default GameCard 