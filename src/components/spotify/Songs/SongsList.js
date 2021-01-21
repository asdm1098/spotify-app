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
                songs.map( (song, index )=> (  
                
                <div key={index}>
                <div className="card ms-3 bg-transparent animate__animated animate__fadeIn" >
                    <img src={ song.imgAlbum } className="card-img mb-2" alt={ song.name } />
                    <div className="card-body" style={{padding:'0'}}>
                        <h5 className="card-title text-truncate mb-0"style={{color: 'white'}} >{ song.name }</h5>
                        <Link to={`./artist/${song?.idArtist}`} className="text-artist">
                            <p className="card-text text-truncate" style={{color: 'gray'}} > { song.nameArtist }</p>
                        </Link>
                    </div>
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