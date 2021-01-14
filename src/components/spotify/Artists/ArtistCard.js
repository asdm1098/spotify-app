import React from 'react';
import { Link } from 'react-router-dom';

export const ArtistCard = ({
    idArtist,
    name,
    imgArtist,
    //hrefArtist,
    //followers
}) => {

    return (

        //////////////////
        <div className="card ms-3 bg-transparent" style={{border: 'none'}} >
            <Link to={`./artist/${idArtist}`}>
            <div    
                //src={ imgArtist } 
                className="card-img" 
                alt={ name } 
                cursor= 'pointer'
                style={imgArtist ? { backgroundImage: 'url('+ imgArtist +')' } : {backgroundColor: '#ffffff'}} 
                    
            ></div>
            </Link>
            <div className="card-body">
                <h5 className="card-titlec text-truncate" style={{color: 'white'}}>{ name }</h5>
                
            </div>
        </div>
        
        
    )
}
