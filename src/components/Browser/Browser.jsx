import React from 'react';
import Header from '../header/Header';
import { useState, useEffect } from 'react';
import { collection, getFirestore } from "firebase/firestore";
import GameCard from '../GameCard/GameCard';
import { query, getDocs } from 'firebase/firestore';
import './Browser.css'

const db = getFirestore();

const Browser = () => {
  const [games, setgames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "videojuegos"));
      const querySnapshot = await getDocs(q);
      const titles = [];
      querySnapshot.forEach((doc) => {
        titles.push(doc.data());
      });
      setgames(titles);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header text="Busca tus Videojuegos favoritos" />
      <div>
        <input className='browser' type ="text" placeholder='Buscar juegos'/>
      </div>
      <div className="gaming_cards">
        {games.map((g)=> (
          <GameCard
            key={g.ID}
            titulo={g.titulo}
            genero={g.genero}
            descripcion={g.descripcion} />
        ))}
      </div>
    </>
  );
};

export default Browser;
