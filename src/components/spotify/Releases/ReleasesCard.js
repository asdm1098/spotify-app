import React from 'react'
//import { Link } from 'react-router-dom'

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
        <div className="card ms-3 bg-transparent animate__animated animate__fadeIn" style={{border: 'none'}}>
            <img src={ imgAlbum} className="card-img mb-2" alt={ name } />
            <div className="card-body" style={{padding: '0'}}>
                <h6 className="overflow-string card-title text-truncate mb-1"
                    style={{color: 'white'}}
                >{ name }</h6>
                <p className="card-text text-truncate"
                    style={{color: 'gray'}}
                >{ nameArtist }</p>
            </div>
        </div>

        
        
    )
}
