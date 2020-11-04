import React  from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SongsCard } from './SongsCard';


export const SongsList = () => {

    const {songs} = useSelector(state => state.songs)
    const {screen} = useSelector(state => state.spotify)

    
    return (
      <div className="card-columns animate__animated animate__fadeIn">
         
          {

              ( screen === 'searchSong' )
                    &&
                songs.map( (song, index) => (  
                
                <div className="card ms-3 animate__animated animate__fadeIn" key={ index }>
                    <img src={ song.imgAlbum } className="card-img" alt={ song.name } />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">{ song.name }</h5>
                        <p className="card-text text-truncate" > { song.nameArtist }</p>
                    </div>
                </div>

                ))
          }
         
         
          {
              ( screen === 'songs')
                   && 
              songs.map( category => (
                  <SongsCard 
                    key={ category.idCategory }
                      { ...category }
                  />
              ))
          }
      </div>
    )
}