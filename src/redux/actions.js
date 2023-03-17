export const ADD_PERSONAJE = "ADD_PERSONAJE";

export const DELETE_PERSONAJE = "DELETE_PERSONAJE";

export const addPersonaje = (character) => {
    return {type: ADD_PERSONAJE, payload: character };
};

export const deletePersonaje = (id) => {
    return {type: DELETE_PERSONAJE, payload: id}
};