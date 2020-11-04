import React from 'react'
import { Link } from 'react-router-dom'

export const ArtistCard = ({
    idArtist,
    name,
    imgArtist,
    hrefArtist,
    followers
}) => {

    return (
        

        //////////////////
        <div className="card ms-3 animate__animated animate__fadeIn ">
            <img src={ imgArtist } className="card-img" alt={ name } style={{cursor: "pointer"}} />
            <div className="card-body">
                <h5 className="card-titlec text-truncate ">{ name }</h5>
                <p className="card-text text-truncate "><b>Followers:</b> { followers }</p>
                <Link to={`./artist/${idArtist}`}>
                    Más...
                </Link>
            </div>
        </div>
        
        
    )
}
