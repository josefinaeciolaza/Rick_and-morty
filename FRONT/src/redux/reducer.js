 import { ADD_PERSONAJE, DELETE_PERSONAJE } from "./actions";
 
 const initialState = {
    myFavorites: [],
    //allCharacters: [],
 };

 const elReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PERSONAJE:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload],
                //allCharacters:[...state.myFavorites]
            };
        case DELETE_PERSONAJE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                    ),
            };
        default:
            return{
                ...state
            };
    }
 };

 export default elReducer;