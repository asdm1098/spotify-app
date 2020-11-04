import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingSongs } from '../../../actions/songs';
import { SongsList } from './SongsList';


export const SongsScreen = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth)
    const { title } = useSelector(state => state.spotify);

    useEffect(() => {
        
        if( token !=null ){

            //console.log('ESTA ES LA PUTA RESPUESTA CORRECTA');
            dispatch(startLoadingSongs(token) );
        }else{
            console.log('ALVVVVVVVVVVVVGA');
        }

    }, [token, dispatch])


    return (
        <div>
            <div className="container mt-3">

                <center><h3>{ title }</h3></center>      
                <div className="container mt-5">
                    <SongsList />
                </div>

            </div>
        </div>
    )
}