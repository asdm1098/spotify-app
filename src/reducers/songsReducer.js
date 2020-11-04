
import { types } from "../types/types";

const initState = {
    songs: [], 
    active: null

}


export const songsReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        
        case types.songsLoad: {

            return{
                ...state,
                songs: [...action.payload],
            }

        }
    
        default:
            return state;
    }


}