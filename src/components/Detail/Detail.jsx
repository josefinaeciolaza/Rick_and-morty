import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";

const Detail = () => {
 const {detailId} = useParams();

 const [character, setCharacter] = useState({});

 useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "d58fbb903a0e.f78899d1002d097eb4c9";

     fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
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
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );

};
export default Detail;