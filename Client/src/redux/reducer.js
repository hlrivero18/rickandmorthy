import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from './action-types';

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case FILTER_CARDS:
            let copy1 = state.allCharacters;
            return {
                ...state,
                myFavorites: copy1.filter(character => {
                    return character.gender === action.payload
                })
            }
        case ORDER_CARDS:
            let copy2 = state.allCharacters;
            if (action.payload === 'A') {
                return {
                    ...state,
                    myFavorites: copy2.sort(function (a, b) {
                        return a.id - b.id
                    })
                }
            }
            else if (action.payload === 'D') {
                return {
                    ...state,
                    myFavorites: copy2.sort(function (a, b) {
                        return b.id - a.id
                    })
                }
            }
        default:
            return state
    }
}

export default rootReducer

//setCharacters(characters.filter(character => { return character.id !== Number(id) }))