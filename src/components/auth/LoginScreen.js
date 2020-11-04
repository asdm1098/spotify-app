import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSpotifyLogin } from '../../actions/auth';


///////////////////////////LOGIN SCREEN////////////////////////////////

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    //const {token} = useSelector(state => state.auth)

    ///////SPOTIFY

    const handleSpotifyLogin = () => {
        console.log('CLICK SPOTIFY! ');

        dispatch( startSpotifyLogin() );
          
    }
  


    return (
            <>
                <center><h3 className="mb-3">Ingresar</h3></center>
                {
                    ( loading ) && 
                    <div className="alert alert-info">Loading...</div>
                }
                    <center>
                    <div className="container">
                        <button
                            onClick = { handleSpotifyLogin }
                            className="btn btn-success"
                            disabled = { loading }
                        >
                            Login Spotify
                        </button>
                    </div>
                    </center>
            </>
    )
}


