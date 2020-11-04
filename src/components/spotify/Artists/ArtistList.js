import React  from 'react'
import { useSelector } from 'react-redux';
import { ArtistCard } from './ArtistCard';


export const ArtistList = () => {

    const {artists} = useSelector(state => state.artists)
    
    return (
      <div className="card-columns animate__animated animate__fadeIn">
          {
              artists.map( artist => (
                  <ArtistCard 
                    key={ artist.idArtist }
                      { ...artist }
                  />
              ))
          }
      </div>
    )
}