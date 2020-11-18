import { loadReleases } from "../helpers/loadReleases"
import { loadReleasesNext } from "../helpers/loadReleasesNext";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";





//cargar releases, función asincrona

export const startLoadingReleases = ( token ) => {
    return async ( dispatch ) => {
        
        const releases = await loadReleases( token );
        
        console.log( releases );
        dispatch( setReleases( releases ) );

    }
}

export const startNextPage = ( token, next ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        const releases = await loadReleasesNext( token, next );
        
        //console.log( releases );
        dispatch( setReleases( releases ) );
        dispatch( finishLoading() );
    }
}

export const startPreviousPage = ( token, previous ) => {
    return async ( dispatch ) => {
        dispatch( startLoading() );

        const releases = await loadReleasesNext( token, previous );
        
        //console.log( releases );
        dispatch( setReleases( releases ) );
        
        dispatch( finishLoading() );

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