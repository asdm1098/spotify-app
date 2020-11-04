import React from 'react'
import { Link } from 'react-router-dom'

export const ReleasesCard = ({
    idAlbum,
    idArtist,
    hrefAlbum,
    hrefArtis,
    imgAlbum,
    name,
    nameArtist
}) => {

    return (
        
        //////////////////
        <div className="card ms-3 ">
            <img src={ imgAlbum} className="card-img" alt={ name } />
            <div className="card-body">
                <h6 className="overflow-string card-title text-truncate ">{ name }</h6>
                <p className="card-text text-truncate">{ nameArtist }</p>
            </div>
        </div>

        
        
    )
}
