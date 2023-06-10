import {ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS} from './action-types'
import axios from 'axios'

// export const addFav = (character)=>{
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const response = await axios.post(endpoint, character)
          return dispatch({
             type: ADD_FAV,
             payload: response.data,
          });;
    };
 };

// export const removeFav = (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const response = await axios.delete(endpoint) 
          return dispatch({
             type: REMOVE_FAV,
             payload: response.data,
       });
     
    };
 };
 

export const filterCards = (gender) => {
    return {
        type: FILTER_CARDS,
        payload: gender
    }
}

export const orderCards = (order) =>{
    return {
        type: ORDER_CARDS,
        payload: order
    }
}