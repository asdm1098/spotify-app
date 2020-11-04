
import { types } from "../types/types";

const initState = {
    artists: [], 
    active: null

}


export const artistsReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        
        case types.ArtistsLoad: {

            return{
                ...state,
                artists: [...action.payload]
            }

        }
    
        default:
            return state;
    }


}