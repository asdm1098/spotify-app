

export const types = {

    login: '[Auth] Login',
    logout: '[Auth] Logout',

    spotifyToken: '[Spotify] get Token Spotify',

    releasesLoad: '[releases] Load Releases',
    releasesScreenActive: '[releases] Screen Active',
    
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    songsStartScreen: '[Songs] Start Screen',
    songsScreenActive: '[Songs] Set active screen', //envio al store la pantalla activa y url
    songsLoad: '[Songs] Load Songs', 

    ArtistsStartScreen: '[Artists] Start Screen',
    ArtistsScreenActive: '[Artists] Set active screen', //envio al store la pantalla activa y url
    ArtistsLoad: '[Artists] Load Artists', 

    activeArtist: '[Artists] artist Active',
    relatedArtists: '[Artists] related Artists',
    albums: '[Artists] albums Artist',
    topTracks: '[Artists] topTracks Artist',



}