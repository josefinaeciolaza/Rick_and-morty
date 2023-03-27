import React from "react";
import { Formulario } from "./StyleForm";
import Validation from "./Validation";

const Form = ({login}) => {
    const [userData, setUserData] = React.useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = React.useState({
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name; //propiedad que dispara el evento en el input (name), la que quiero modificar en el form (el event.target es el input)

        setUserData({...userData, [name]:value});
        Validation({...userData, [name]: value}, errors, setErrors); 
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }


    return(
        <Formulario action="" onSubmit={submitHandler}>
            <div>
            <labe htmlFor="username">Username:</labe>
            <input 
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            />
            <p>{errors.username}</p>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input 
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            />
            <p>{errors.password}</p>
            </div>
            
            <button type="submit">LOGIN</button>
        </Formulario>
    )
};

export default Form;