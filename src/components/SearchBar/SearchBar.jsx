import { useState } from "react";
import { AgreBoton } from "./StyleSearch";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) =>{
     setId(event.target.value)
   };

   return (
      <div>
         <input type='search' onChange={handleChange}/>
      <AgreBoton onClick={() => onSearch(id)}>Agregar</AgreBoton>
      </div>
   );
}

