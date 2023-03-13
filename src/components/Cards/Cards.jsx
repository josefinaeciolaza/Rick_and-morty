import Card from '../Card/Card';
import { Cartas } from './StyleCartas';


export default function Cards({characters, onClose}) {
 
   return <Cartas>
      {characters.map(({ id, name, species, gender, image}) => {
         return <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose ={onClose}
         />
      })}
   </Cartas>;
}


