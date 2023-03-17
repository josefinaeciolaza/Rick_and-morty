import React from "react";
import { Contenedor } from "./StyleAbout";
class About extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Contenedor>
                <h2>La creadora de esta app se llama Josefina Eciolaza</h2>
                <h3>Su realización es en el marco de una proyecto integrador correspondiente al cursado del bootcamp de SoyHenry</h3>
            </Contenedor>
        );
    }

}

export default About;
