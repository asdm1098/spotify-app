import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { startLoadingReleases, startNextPage, startPreviousPage } from '../../../actions/releases';
import { ReleasesList } from './ReleasesList';





export const ReleasesScreen = () => {

    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth);
    const { title } = useSelector(state => state.spotify);
    const { loading } = useSelector(state => state.ui);
    const { next, previous } = useSelector(state => state.releases);


    useEffect(() => {
        
        if( token !=null ){

            //console.log('ESTA ES LA PUTA RESPUESTA CORRECTA');
            dispatch(startLoadingReleases(token) );
        }else{
            console.log('ALVVVVVVVVVVVVGA');
        }

    }, [token, dispatch])

    const nextPage = () => {
        dispatch( startNextPage( token, next ) );
    }

    const previousPage = () => {
        dispatch( startPreviousPage( token, previous ) );

        //console.log('atrasss');
    }

    return (
        <div>
            <div className="container mt-3">
            <center><h3>{ title }</h3></center>

                <div className="container mt-4">
                    <div className="mb-2">
                        <button 
                            className = "btn" 
                            style={{background: 'none', border:'none', cursor: 'pointer'}} 
                            disabled = { loading || !previous } 
                            onClick={previousPage} 
                        >
                            <i  
                                className="fas fa-chevron-circle-left" 
                                style={{fontSize: '29px', color: 'gray'}}
                            ></i>
                        </button>

                        <button 
                            className = "btn" 
                            style={{background: 'none', border:'none', cursor: 'pointer'}}  
                            disabled= {loading || !next} 
                            onClick={nextPage}
                        >
                            <i  
                                className="fas fa-chevron-circle-right"
                                style={{fontSize: '29px', color: 'gray', cursor: 'pointer'}}
                            ></i>
                        </button>
                    </div>
                    <ReleasesList  />
                </div>
                
            </div>
        </div>
    )
}