import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingArtists } from '../../../actions/artists';
import { ArtistList } from './ArtistList';




export const ArtistsScreen = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth)

    useEffect(() => {
        
        if( token !=null ){
            //console.log('ESTA ES LA RESPUESTA CORRECTA');
            dispatch(startLoadingArtists(token) );
        }else{
            console.log('error !');
        }

    }, [token, dispatch])


    return (
        <div>
            <div className="container mt-2">
            <center><h3>Artists</h3></center>

                <div className="container mt-4">
                    <ArtistList />
                </div>

            </div>
        </div>
    )
}
