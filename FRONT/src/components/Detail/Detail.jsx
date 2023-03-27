import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Detalle } from "./StyleDetail";
//import axios from "axios";

const Detail = () => {
 const {detailId} = useParams();

 const [character, setCharacter] = useState({});

 useEffect(() => {
    //const URL_BASE = "https://be-a-rym.up.railway.app/api";
    //const KEY = "d58fbb903a0e.f78899d1002d097eb4c9";
    const URL_BASE = "http://localhost:3001/rickandmorty/detail";

     fetch(`${URL_BASE}/character/${detailId}`)
     .then((response) => response.json())
     .then((char) => {
      if (char.name) {
         setCharacter(char);
      } else {
         window.alert("No hay personajes con ese ID");
       }
     })
     .catch((err) => {
       window.alert("No hay personajes con ese ID");
     });
   return setCharacter({});
//eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);


 //axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
   //setCharacter(response.data)
//);
  //eslint-disable-next-line react-hooks/exhaustive-deps
//}, []);

 return (
    <Detalle>
      {character.name ? (
        <>
        <img src={character.image} alt="img" />
          <h2>{character.name}</h2>
          <h3>{character.status}</h3>
          <h3>{character.species}</h3>
          <h3>{character.gender}</h3>
          <h3>{character.origin?.name}</h3>
          
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </Detalle>
  );

};
export default Detail;