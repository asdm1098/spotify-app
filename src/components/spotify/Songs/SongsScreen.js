import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingSongs } from '../../../actions/songs';
import { SongsList } from './SongsList';


export const SongsScreen = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth)

    useEffect(() => {
        
        if( token !== null ){
            //console.log('ESTA ES LA RESPUESTA CORRECTA');
            dispatch(startLoadingSongs(token) );
        }else{
            console.log('ALVVVVVVVVVVVVGA');
        }

    }, [token, dispatch])


    return (
        <div>
            <div className="container mt-2">

                <center><h3>Songs</h3></center>      
                <div className="container mt-5">
                    <SongsList />
                </div>

            </div>
        </div>
    )
}