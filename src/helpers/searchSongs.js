import axios from 'axios';


export const searchSongs = async ( token, search ) => {
    
    

    const {data} = await axios(`https://api.spotify.com/v1/search?q=${search}&type=track&market=CO&limit=6&offset=5`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })/*.then ( ({data}) => {
            console.log('ESTA ES LA RESPUESTA: ');
            console.log( data );
            
        })
        .catch( err => {
            console.log('FALLO LA PETICIÓN MI BRO :( ');
            console.log( err );
        })*/

    //console.log(data);


     
    const {items} = data.tracks;
    //console.log(items);
    
    
    const songs = [];
    

    items.forEach( song => {

        songs.push({
            
            idSong: song.id,
            idAlbum: song.album.id,
            name: song.name,
            imgAlbum: song.album.images[1]?.url,
            hrefAlbum: song.album.href,
            hrefArtist: song.artists[0].href,
            idArtist: song.artists[0].id,
            nameArtist: song.artists[0].name,
            preview: song.preview_url
        })

    });

    //console.log(songs);
    return songs;
}