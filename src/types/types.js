

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
    songsUpdate: '[Songs] Update Songs',
    songsLogoutCleaning: '[Songs] Logout Cleaning',

    ArtistsStartScreen: '[Artists] Start Screen',
    ArtistsScreenActive: '[Artists] Set active screen', //envio al store la pantalla activa y url
    ArtistsLoad: '[Artists] Load Artists', 
    ArtistsUpdate: '[Artists] Update Artists',
    ArtistsLogoutCleaning: '[Artists] Logout Cleaning',



}