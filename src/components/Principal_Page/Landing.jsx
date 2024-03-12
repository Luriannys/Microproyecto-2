import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ClubCard from "../ClubCard/ClubCard";
import Club from "../Club/Club.jsx";
import Header from "../header/Header";
import { query, getDocs } from 'firebase/firestore';
import appFirebase from '../../credenciales.js';
import "./Landing.css";
import { useState, useEffect } from 'react';
import { collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);


const Landing = () => {
  const [clubs, setClubes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "clubes"));
      const querySnapshot = await getDocs(q);
      const titles = [];
      querySnapshot.forEach((doc) => {
        titles.push(doc.data());
      });
      setClubes(titles);
    };
    fetchData();
  }, []);

  


  return (
    <>
    
    <div><Header text=" BIENVENIDO A LA DIMENSION GAMER ..." />
    </div>
    <div className="clubes_cards">
        {clubs.map((club)=> (
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
