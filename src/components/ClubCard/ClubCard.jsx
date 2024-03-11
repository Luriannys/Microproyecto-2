/* eslint-disable react/prop-types */
import './ClubCard.css'
import {IoLogoGameControllerB } from "react-icons/io";
import { query, getDocs } from 'firebase/firestore';
import appFirebase from '../../credenciales.js';
import {useState, useEffect} from 'react';
import { collection, getFirestore } from "firebase/firestore"



const db = getFirestore(appFirebase);

const ClubCard = ({ClubName, description, videojuegos}) => {
  
const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "videojuegos"));
      const querySnapshot = await getDocs(q);
      const titles = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        titles.push(data);
      });      
      setGames(titles);
    };
    fetchData();
  }, []);

const diccionarioVideojuegos = games.reduce((obj, videojuego) => {
  obj[videojuego.id] = videojuego;
  return obj;
}, {});
console.log(diccionarioVideojuegos);

  
  return (
    <><div className='container'>
          <h3 className='title'>{ClubName}</h3>
          <IoLogoGameControllerB className='icon_'/>
          <div className='Description'>
              <p>{description}</p>
          </div>
          <div className='gaminn'><strong> Videojuegos: </strong>
          {videojuegos.map(ID => (
  diccionarioVideojuegos[ID] ? <p key={ID}>{">"+" "+ diccionarioVideojuegos[ID].titulo}</p> : null
))}


          </div>
      </div>
      
      
      </>

  )
 
  }
export default ClubCard