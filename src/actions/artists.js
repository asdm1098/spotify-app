
import { loadArtists } from "../helpers/loadArtists";
import { searchArtists } from "../helpers/searchArtists";
import { albumsOptions, getArtistById, loadAlbumsPage, relatedOptions, topTracksOptions } from "../selectors/getArtistById";
import { types } from "../types/types";
import { startLogout } from "./auth";
import { finishLoading, startLoading } from "./ui";



export const startLoadingArtists = ( token ) => {
    return async ( dispatch ) => {
        
        try {
            dispatch( activeArtists('artists', 'Artists') );
            const artists = await loadArtists( token );
            //console.log( artists );
            dispatch( setArtists( artists ));
            dispatch( activeArtists('artists', 'Artists') );
            //console.log(artists);
            dispatch( finishLoading() );
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }
        
        
    }
}

export const startSearchArtist = ( token, search ) => {
    return async ( dispatch ) => {

        try {
            dispatch( startLoading() );
            
            const artists = await searchArtists( token, search );
            //console.log('RESULTADO DE LA BUSQUEDA:' , artists);
            dispatch( setArtists( artists ));
            dispatch( finishLoading() );
            
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }
    }
}

export const setArtists = ( artists ) => ({
    type: types.ArtistsLoad,
    payload: artists,
})


export const activeArtists = (screen, title ) => ({
    type: types.ArtistsScreenActive,
    payload: {
        screen,
        title
    }
});


//ARTISTA ACTIVO
export const startActiveArtist = ( artistId, token ) => {
    return async ( dispatch ) => {
        try {
            
            dispatch( startLoading() );
            const activeArtist = await getArtistById( artistId, token)
            dispatch( setActiveArtist(activeArtist[0]))
            dispatch(activeArtists('ActiveArtist', 'ActiveArtist'))
    
            dispatch( finishLoading() );
    
            //console.log(activeArtist[0]);
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }
    }
}

const setActiveArtist = ( activeArtist ) => ({
    type: types.activeArtist,
    payload: activeArtist
})



//ARTISTAS RELACIONADOS
export const startRelatedArtists = ( artistId, token ) => {
    return async ( dispatch ) => {
        const relatedArtists = await relatedOptions( artistId, token)
        dispatch( setRelatedArtists(relatedArtists))
    }
}

const setRelatedArtists = ( relatedArtists ) => ({
    type: types.relatedArtists,
    payload: relatedArtists
})

///ALBUMS ARTISTA
export const startAlbumsArtist = ( artistId, token ) => {
    return async ( dispatch ) => {
        const albums = await albumsOptions( artistId, token)
        dispatch( setAlbums(albums))
    }
}

export const startNextPageAlbums = ( token, next ) => {
    return async ( dispatch ) => {
        try {
            dispatch( startLoading());
            const albums = await loadAlbumsPage( token, next );
            dispatch( setAlbums(albums) );
            dispatch( finishLoading() );
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }
    }
}

export const startPreviousPageAlbums = ( token, previous ) => {
    return async ( dispatch ) => {
        try {
            dispatch( startLoading());
            const albums = await loadAlbumsPage( token, previous );
            dispatch( setAlbums(albums) );
            dispatch( finishLoading() );
        } catch (error) {
            console.log(error);
            dispatch( startLogout());
        }
    }
}

const setAlbums = ( albums ) => ({
    type: types.albums,
    payload: albums
})

//TOP TRACKS ARTISTA
export const startTopTracks = ( artistId, token ) => {
    return async ( dispatch ) => {
        const topTracks = await topTracksOptions( artistId, token);
        dispatch( setTracks(topTracks));
    }
}

const setTracks = ( tracks ) => ({
    type: types.topTracks,
    payload: tracks
})