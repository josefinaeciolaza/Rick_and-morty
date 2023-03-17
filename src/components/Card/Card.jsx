import { ElBoton, Carta } from "./StyleCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePersonaje, addPersonaje} from "../../redux/actions";
import { useState, useEffect } from "react";



function Card({id, name, species, gender, image, onClose, addPersonaje, deletePersonaje, myFavorites}){ //HIZO DESTRUCRURING DE LOS COMPONENTES

   const[ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deletePersonaje(id);
      }else{
         setIsFav(true);
         addPersonaje({id, name, species, gender, image, onClose, addPersonaje, deletePersonaje,
         });
      }
   }; 

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   return (      
      <Carta>
         {
            isFav ? (
         <button onClick={handleFavorite}>❤️</button>
          ) : (
         <button onClick={handleFavorite}>🤍</button>
          )
         }
          <ElBoton onClick={()=>onClose(id)}>X</ElBoton>
          <img src={image} alt=""/>
          <Link to={`/detail/${id}`}>
          <h2>Name: {name}</h2>
          </Link>
          <h2>Specie: {species}</h2>
          <h2>Gender: {gender}</h2>
       </Carta>
    );
 }

const mapDispatchToProps = (dispatch) => {
   return {
      addPersonaje: (character) => {dispatch(addPersonaje(character));
      },
      deletePersonaje: (id) => {dispatch(deletePersonaje(id));
      },
   }
 };

 const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Card);

 // export default function Card(props) {
//    return (
//       <Carta>
//          <ElBoton onClick={props.onClose}>X</ElBoton>
//          <h2>{props.name}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <img  src={props.image} alt=" " />
//       </Carta>
//    );
// }