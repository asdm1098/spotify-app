import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArtistById } from '../../selectors/getArtistById';

export const ArtistScreen = ({ history }) =>  {

    const { artistId } = useParams();
    const { token } = useSelector(state => state.auth);

    const [artist, setArtist] = useState('')

    useEffect(async() => {
       
        const artist = await getArtistById( artistId, token );
        setArtist( artist[0] )
        //console.log( artist );

    }, [artistId, token])
    

    //const artist = await getArtistById( artistId, token );

     
    
    const {
        
        name,
        imgArtist,
        hrefArtist,
        followers,
        popularity,
        type

    } = artist;
    
    

    const handleReturn = () => {

        if( history.length <= 2 ){
            history.push('/')
        }else{
            history.goBack();
        }

    }

    return (

        <div className="container mt-5">
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ imgArtist }
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ name }</h3>
                <ul className="list-group list-group-flush" style={{color: 'white'}} >
                    <li className="list-group-item bg-transparent"><b> Name: </b> { name } </li>
                    <li className="list-group-item bg-transparent"><b> Followers: </b> { followers } </li>
                    <li className="list-group-item bg-transparent"><b> Popularity: </b> { popularity } </li>
                    <li className="list-group-item bg-transparent"><b> Type: </b> { type } </li>
                </ul>

                <button 
                    className="btn btn-outline-success mt-3"
                    onClick={ handleReturn }
                    style={{border: 'none'}}
                >
                    <i className="fas fa-undo"></i>
                </button>
            </div>
        </div>
    </div>      
        
    )
}


        