import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { startLoadingReleases } from '../../../actions/releases';
import { ReleasesList } from './ReleasesList';





export const ReleasesScreen = () => {

    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);
    const { title } = useSelector(state => state.spotify);
    //const {releases} = useSelector(state => state.releases);
    

    //console.log(releases);

    useEffect(() => {
        
        if( token !=null ){

            //console.log('ESTA ES LA PUTA RESPUESTA CORRECTA');
            dispatch(startLoadingReleases(token) );
        }else{
            console.log('ALVVVVVVVVVVVVGA');
        }

    }, [token, dispatch])

    return (
        <div>
            <div className="container mt-3">
            <center><h3>{ title }</h3></center>
               
                <div className="container mt-5">
                    <ReleasesList  />
                </div>
            
            </div>
        </div>
    )
}