import { types } from "../types/types";


const initialState = {
    screen: 'releases',
    title: 'New releases',
}


export const spotifyReducer = ( state = initialState, action) => {

    switch (action.type) {
        
        case types.songsScreenActive:
            return {
                ...state,
                screen: action.payload.screen,
                title: action.payload.title
            }

        case types.ArtistsScreenActive:
            return {
                ...state,
                screen: action.payload.screen,
                title: action.payload.title
            }

        case types.releasesScreenActive:
            return {
                ...state,
                screen: action.payload,
                title: action.payload.title
            }
    
        default:
            return state;
    }

}