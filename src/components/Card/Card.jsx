import { ElBoton, Carta } from "./StyleCard";

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


export default function Card( {id, name, species, gender, image, onClose}){ //HIZO DESTRUCRURING DE LOS COMPONENTES
   return (      
      <Carta>
          <ElBoton onClick={()=>onClose(id)}>X</ElBoton>
          <img src={image} alt=""/>
          <h2>Name: {name}</h2>
          <h2>Specie: {species}</h2>
          <h2>Gender: {gender}</h2>
       </Carta>
    );
 }