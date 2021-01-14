import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

/**TEST */
import TopCart from './Artists/ArtistInfo/TopCart';
import AlbumCart from './Artists/ArtistInfo/AlbumCart';
import RelatedPhoto from './Artists/ArtistInfo/RelatedPhoto';
import { startActiveArtist, startAlbumsArtist, startRelatedArtists, startTopTracks } from '../../actions/artists';
////////////////////////

export const ArtistScreen = () =>  {
    
    const dispatch = useDispatch();
    const { artistId } = useParams();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        //const artist = await getArtistById( artistId, token );
        dispatch(startActiveArtist( artistId, token ));
        dispatch( startRelatedArtists( artistId, token ));
        dispatch( startAlbumsArtist( artistId, token ));
        dispatch( startTopTracks( artistId, token ));
       
        //setArtist( artist[0] );
        //console.log(artist[0]);

    }, [artistId, token, dispatch])

    
    const { artist, relatedArtists, albums, topTracks} = useSelector(state => state.artists);
    const [offset, setOffset] = useState(0);


    //console.log(relatedArtists);

    const {
        name,
        imgArtist,
        //hrefArtist,
        //followers,
        //popularity,
        //type

    } = artist;

    const offsetList = (id) => {
        switch (id) {
            case 'offPrev':
                if (offset > 0) {
                    setOffset(offset - 6);
                }
                break;
            case 'offNext':
                setOffset(offset + 6);
                break;

            default: 
                return console.log('default');     
        }
    }

   

    return (
        <div className="new-releases animate__animated animate__fadeIn">
        <div className="artist-profile-content row">
            <div className="artist-about column">
                <div className="artist-about-photo column">
                    <div
                        style={imgArtist
                        ? {
                            backgroundImage: 'url(' + imgArtist[1]?.url + ')'
                        }
                        : {
                            backgroundColor: '#ffffff'
                        }}
                        className="artist-photo"></div>
                    <div className="artist-profile-name white">{name}</div>
                </div>
                <div className="artist-about-info relative">
                    <div className="artist-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut adipisci
                     
                            accusantium perspiciatis quae iste, quibusdam esse quaerat a vero. A, sint!</p>
                    </div>
                </div>
                <div className="artist-about-related-container">
                    <p>Similar to {name}</p>
                    <div className="artist-about-related row">
                        {relatedArtists
                            ? relatedArtists
                                .slice(0, 5)
                                .map(related => {
                                    return (<RelatedPhoto
                                        key = { related.idArtist}
                                        {...related} 
                                    />)
                                })
                            : ''}
                    </div>
                </div>
            </div>
            <div className="artist-profile-music column">
                <div className="artist-profile-music-albums column">
                    <div className="albums-control row">
                        <p>Albums</p>
                        <div className="release-control">
                            <i
                                id="offPrev"
                                onClick={() => offsetList("offPrev")}
                                className="fas fa-chevron-circle-left"></i>
                            <i
                                id="offNext"
                                onClick={() => offsetList("offNext")}
                                className="fas fa-chevron-circle-right"></i>
                        </div>
                    </div>

                    <div className="album-cart-container relative row">
                        {albums
                            ? albums.map(album => {
                                return (<AlbumCart
                                    key={album.idAlbum}
                                    title={album.name}
                                    year={album
                                    .release_date
                                    .slice(0, 4)}
                                    thumb={album.images
                                    ? album.images[0].url
                                    : ''}/>)
                            })
                            : ''}
                    </div>
                </div>
                <div className="artist-profile-music-tracks-container relative">
                    <div className="artist-profile-music-tracks column">
                        {topTracks
                            ? topTracks.map((track, index) => {
                                return (<TopCart
                                    key={track.idTrack}
                                    position={index + 1}
                                    {...track}
                                    />)
                            })
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


        