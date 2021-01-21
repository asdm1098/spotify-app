
import { types } from "../types/types";

const initState = {
    artists: [],
    artist: [],
    relatedArtists: [],
    albums: [],
    topTracks: [],
    next: null,
    previous: null,

}


export const artistsReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        
        case types.ArtistsLoad: {

            return{
                ...state,
                artists: [...action.payload]
            }

        }
        case types.activeArtist: {
            return {
                ...state,
                artist: {...action.payload}
            }
        }

        case types.relatedArtists: {
            return {
                ...state,
                relatedArtists: [ ...action.payload ]
            }
        }

        case types.albums: {
            return {
                ...state,
                albums: [ ...action.payload.albums ],
                next: action.payload.next,
                previous: action.payload.previous
            }
        }

        case types.topTracks: {
            return {
                ...state,
                topTracks: [ ...action.payload ]
            }
        }
    
        default:
            return state;
    }


}