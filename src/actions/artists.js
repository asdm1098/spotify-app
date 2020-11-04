
import { loadArtists } from "../helpers/loadArtists";
import { searchArtists } from "../helpers/searchArtists";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";



export const startLoadingArtists = ( token ) => {
    return async ( dispatch ) => {
        
        const artists = await loadArtists( token );
        
        console.log( artists );
        dispatch( setArtists( artists ));
    }
}

export const startSearchArtist = ( token, search ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        
        const artists = await searchArtists( token, search );
        //console.log('RESULTADO DE LA BUSQUEDA:' , artists);
        dispatch( setArtists( artists ));
        dispatch( finishLoading() );
    }
}

export const setArtists = ( artists ) => ({
    type: types.ArtistsLoad,
    payload: artists,
})


export const startScreenArtists = () => {
    return (dispatch) => {
        dispatch( startLoading() );
        //const {uid} = getState().auth;

        const newSearch = {
            title: '',
        }

        dispatch( activeArtists('artists', 'Artists') );
        console.log( 'carga correcta');
        dispatch( finishLoading() );

        //console.log(uid, newSearch);
        //window.location.href = '/artists';
    }
}

export const activeArtists = (screen, title ) => ({
    type: types.ArtistsScreenActive,
    payload: {
        screen,
        title
    }
});