import { AgreBoton } from "./StyleSearch";

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <AgreBoton onClick={(id) => {props.onSearch(id)}}>Agregar</AgreBoton>
      </div>
   );
}

