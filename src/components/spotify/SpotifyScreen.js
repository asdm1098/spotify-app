import React from 'react';
import { useSelector } from 'react-redux';


import { ArtistsScreen } from './Artists/ArtistsScreen';
import { ReleasesScreen } from './Releases/ReleasesScreen';
import { SongsScreen } from './Songs/SongsScreen';


export const SpotifyScreen = () => {

    const { screen, title } = useSelector(state => state.spotify);
    
    //console.log(data);
    return (
        <div>
            
            <div className="container mt-3">

                <center><h3>{ title }</h3></center>
                
                    
                    {
                        ( screen === 'releases')
                            &&
                        <ReleasesScreen />
                    }

                    {
                        ( screen === 'artists')
                            &&
                        < ArtistsScreen />
                    }

                    {
                        ( screen === 'songs' || screen === 'searchSong')
                            &&
                        < SongsScreen />
                    }

            </div>
        </div>
    )
}
