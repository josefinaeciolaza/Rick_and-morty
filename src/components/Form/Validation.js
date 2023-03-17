const Validation = (userData, errors, setErrors) => {
    //Validacion de erros para username
    if(!userData.username)
        setErrors({...errors, username:"Por favor complete este campo"});
    else if(userData.username.length > 35)
        setErrors({...errors, username:"No puede superar los 35 caracteres"});
               // eslint-disable-next-line no-useless-escape
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({...errors, username:"Email invalido"});
    }else{
        setErrors({...errors, username: ""});
    }
    //Validacion de errors para la contraseña
    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({ ...errors, password: "La longitud de password es inválida" });
    } else if (!/\d/.test(userData.password)) {
        setErrors({ ...errors, password: "Passaword debe contener al menos un número" });
    } else {
        setErrors({ ...errors, password: "" });
      }
}

export default Validation;