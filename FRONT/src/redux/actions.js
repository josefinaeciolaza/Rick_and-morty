export const ADD_PERSONAJE = "ADD_PERSONAJE";

export const DELETE_PERSONAJE = "DELETE_PERSONAJE";

export const FILTER = "FILTER";

export const ORDER = "ORDER";

export const addPersonaje = (character) => {
    return {type: ADD_PERSONAJE, payload: character };
};

export const deletePersonaje = (id) => {
    return {type: DELETE_PERSONAJE, payload: id}
};

export const filterCards = (gender) => {
    return{type: FILTER, payload: gender}
};

export const orderCards = (id) => {
    return{type: ORDER, payload: id}
};