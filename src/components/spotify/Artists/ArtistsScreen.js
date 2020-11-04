import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingArtists } from '../../../actions/artists';
import { ArtistList } from './ArtistList';




export const ArtistsScreen = () => {
    const dispatch = useDispatch();
    
    const {token} = useSelector(state => state.auth)
    const { title } = useSelector(state => state.spotify);

    useEffect(() => {
        
        if( token !=null ){

            //console.log('ESTA ES LA PUTA RESPUESTA CORRECTA');
            dispatch(startLoadingArtists(token) );
        }else{
            console.log('ERROR !');
        }

    }, [token, dispatch])


    return (
        <div>
            <div className="container mt-3">
            <center><h3>{ title }</h3></center>

                <div className="container mt-5">
                    <ArtistList />
                </div>

            </div>
        </div>
    )
}
