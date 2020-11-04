import { loadReleases } from "../helpers/loadReleases"
import { types } from "../types/types"





//cargar releases, función asincrona

export const startLoadingReleases = ( token ) => {
    return async ( dispatch ) => {
        
        const releases = await loadReleases( token );
        
        console.log( releases );
        dispatch( setReleases( releases ) );

    }
}


//Grabar lanzamientos obtenidos en nuestro store
export const setReleases = ( releases ) => ({
    type: types.releasesLoad,
    payload: releases 
});

export const activeReleases = (screen, title ) => ({
    type: types.releasesScreenActive,
    payload: {
        screen,
        title
    }
});