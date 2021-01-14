import Swal from 'sweetalert2';
import axios from 'axios';

import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';
import { Credentials } from '../spotify/Credentials';


export const startSpotifyLogin = () => {
    const spotify = Credentials();

    return ( dispatch ) => {

        dispatch( startLoading() );

        axios('https://accounts.spotify.com/api/token', {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'

        })
        .then( tokenResponse => {
            //setToken(tokenResponse.data.access_token);
            console.log( tokenResponse.data.access_token );
            dispatch( finishLoading() );
            localStorage.setItem('token', tokenResponse.data.access_token );
            dispatch(loginSpotify( tokenResponse.data.access_token ) );
            console.log('SE HACE EL DISPATCH AL REDUCERRRRR');
            
            window.location.href = '/';
        })
        .catch( err => {
            console.log(err);
            dispatch( finishLoading() );
            Swal.fire( 'Error', err.message, 'error' );
        })
    }

}

export const loginSpotify = ( token ) => ({
    type: types.spotifyToken,
    payload: {
        token
    }
});

//En caso de necesitarse LOGIN Y LOGOUT.

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid, 
            displayName
        }
});

export const startLogout = () => {
    return async( dispatch ) => {
        localStorage.removeItem('token');
        dispatch( logout() );
        window.location.href = '/';
    }
}

export const logout = () => ({
    type: types.logout
});