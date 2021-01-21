import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


import { ArtistsScreen } from '../components/spotify/Artists/ArtistsScreen'
import { ArtistScreen } from '../components/spotify/ArtistScreen'
import { ReleasesScreen } from '../components/spotify/Releases/ReleasesScreen'
import { SongsScreen } from '../components/spotify/Songs/SongsScreen'

//import { SpotifyScreen } from '../components/spotify/SpotifyScreen'

//import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>  
            {/*<Navbar />*/}
                <Switch>
                    
                    <Route path="/artists" component={ ArtistsScreen } />
                    <Route exact path="/artist/:artistId" component={ ArtistScreen } />
                    <Route exact path="/songs" component={ SongsScreen } />
                    <Route exact path="/songs/:songId" component={ SongsScreen } />
                    <Route exact path="/" component={ ReleasesScreen } />

                    <Redirect to="/" />
                </Switch>
        </>
    )
}
