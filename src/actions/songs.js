
import { loadSongs } from "../helpers/loadSongs";
import { searchSongs } from "../helpers/searchSongs";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";


export const startLoadingSongs = ( token ) => {
    return async ( dispatch ) => {
        
        const songs = await loadSongs( token );
        
        console.log( songs );
        dispatch( setSongs( songs ));
    }
}

export const startSearchSong = ( token, search ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        

        try {
            
            const songs = await searchSongs( token, search );
            console.log('RESULTADO DE LA BUSQUEDA:' , songs);
            dispatch( activeSongs('searchSong', 'Songs found') );
            dispatch( setSongs( songs ));
    
    
            dispatch( finishLoading() );

        } catch (error) {
            alert('No se encontrarón resultados');
            console.log(error);
            dispatch( finishLoading() );
        }
    }
}

export const setSongs = ( songs ) => ({
    type: types.songsLoad,
    payload: songs 
})


export const startScreen = () => {
    return (dispatch, getState) => {
        
        dispatch( startLoading() );

        //const {uid} = getState().auth;
       
            
        dispatch( activeSongs('songs', 'Songs') );
        console.log('carga correcta');

        dispatch(finishLoading());
            

        /*const newSearch = {
            title: '',
        }*/
        
        //console.log(uid, newSearch);
        //const doct = await db.collection( `${uid}/journal/notes` ).add( newSearch );
        //window.location.href = '/songs';
    }
}

export const activeSongs = (screen, title) => ({
    type: types.songsScreenActive,
    payload: {
        screen,
        title
    }
});