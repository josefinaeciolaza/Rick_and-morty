import Card from '../Card/Card';
import { Cartas } from './StyleCartas';


export default function Cards({characters}) {
 const onClose = () =>  window.alert('Emulamos que se cierra la card');
   return <Cartas>
      {characters.map(({name, species, gender, image}) => {
         return <Card
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose ={onClose}
         />
      })}
   </Cartas>;
}


