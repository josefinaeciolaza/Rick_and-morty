import { ElBoton, Carta } from "./StyleCard";

export default function Card(props) {
   return (
      <Carta>
         <ElBoton onClick={props.onClose}>X</ElBoton>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt=" " />
      </Carta>
   );
}


// export default function Card(name, species, gender, image, onClose) { HIZO DESTRUCRURING DE LOS COMPONENTES
//    return (
//       <div>
//          <button onClick={onClick}>X</button>
//          <h2>Name: {name}</h2>
//          <h2>Specie: {species}</h2>
//          <h2>Gender: {gender}</h2>
//          <img  src={image} alt="Rick" />
//       </div>
//    );
// }