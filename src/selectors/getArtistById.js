import axios from 'axios';


export const getArtistById = async ( artistId, token ) => {
    
    const {data} = await axios(`https://api.spotify.com/v1/artists/${ artistId}`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })

        //console.log(data);
        const artist = [];
        
        artist.push({
                    
                    idArtist: data.id,
                    name: data.name,
                    imgArtist: data.images,
                    hrefArtist: data.href,
                    followers: data.followers.total,
                    popularity: data.popularity,
                    type: data.type

        })
    
    //console.log(artist);
    
    return artist;

}


export const relatedOptions = async ( artistId, token ) => {
    
    const {data} = await axios(`https://api.spotify.com/v1/artists/${ artistId}/related-artists`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })

        const {artists} = data;

        const relateds = [];
        
        artists.forEach( data => {
            relateds.push({
                    
                idArtist: data.id,
                name: data.name,
                imgArtist: data.images,
                hrefArtist: data.href,
                followers: data.followers.total,
                popularity: data.popularity,
                type: data.type
            })

        })

        
    //console.log(':::RELATED OPTIONS:::');
    //console.log(artists);
    return relateds
}

export const albumsOptions = async ( artistId, token ) => {
    
    const {data} = await axios(`https://api.spotify.com/v1/artists/${ artistId}/albums?limit=6&offset=6`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })


        const next = data?.next;
        const previous = data?.previous;

        const {items} = data;
        const albums = [];
        
        items.forEach( data => {

            albums.push({
                        
                idAlbum: data.id,
                name: data.name,
                release_date: data.release_date,
                images: data.images,
    
            })
        });


    //console.log('::ALBUMS OPTIONS:::');
    //console.log(albums);
    
    return {
        albums, next, previous
    };

}

export const loadAlbumsPage = async ( token, api ) => {
    const {data} = await axios(`${api}`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        });

        const next = data?.next;
        const previous = data?.previous;

        const {items} = data;
        const albums = [];
        
        items.forEach( data => {

            albums.push({
                        
                idAlbum: data.id,
                name: data.name,
                release_date: data.release_date,
                images: data.images,
    
            })
        });
    
    return {
        albums, next, previous
    };
}



export const topTracksOptions = async ( artistId, token ) => {
    
    const {data} = await axios(`https://api.spotify.com/v1/artists/${ artistId}/top-tracks?market=CO`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })

        const { tracks } = data;
        //console.log(tracks);
        //console.log(data);
        const trackss = [];
        
        tracks.forEach( data => {

            trackss.push({
                        
                idTrack: data.id,
                name: data.name,
                album: data.album.name,
                duration_ms: data.duration_ms,
                images: data.album.images,
                preview: data?.preview_url
    
            })
        })

    //console.log(':::DATA TOP TRACKS OPTIONS');
    //console.log(trackss);
    
    return trackss;

}