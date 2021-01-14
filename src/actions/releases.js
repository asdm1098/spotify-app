import { loadReleases } from "../helpers/loadReleases"
import { loadReleasesNext } from "../helpers/loadReleasesNext";
import { types } from "../types/types"
import { startLogout } from "./auth";
import { finishLoading, startLoading } from "./ui";





//cargar releases, función asincrona

export const startLoadingReleases = ( token ) => {
    return async ( dispatch ) => {
        
        try {
            const releases = await loadReleases( token );
            //console.log( releases );
            dispatch( setReleases( releases ) );
        } catch (error) {
            console.log('error');
            dispatch( startLogout());
        }
        

    }
}

export const startNextPage = ( token, next ) => {
    return async ( dispatch ) => {

        try {
            dispatch( startLoading() );
            const releases = await loadReleasesNext( token, next );
            
            //console.log( releases );
            dispatch( setReleases( releases ) );
            dispatch( finishLoading() );
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }

    }
}

export const startPreviousPage = ( token, previous ) => {
    return async ( dispatch ) => {
        
        try {
            dispatch( startLoading() );
    
            const releases = await loadReleasesNext( token, previous );
            
            //console.log( releases );
            dispatch( setReleases( releases ) );
            
            dispatch( finishLoading() );
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }


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