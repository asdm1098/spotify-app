import axios from 'axios';


export const searchArtists = async ( token, search ) => {
    
    

    const {data} = await axios(`https://api.spotify.com/v1/search?q=${search}&type=artist&market=CO&limit=6&offset=5`, {
       
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


     
    const {items} = data.artists;
    //console.log(items);
    
    
    const artistas = [];
    

    items.forEach( artist => {

        artistas.push({
            
            idArtist: artist.id,
            name: artist.name,
            imgArtist: artist.images[1]?.url,
            hrefArtist: artist.href,
            followers: artist.followers.total,
            popularity: artist.popularity,

        })

    });

    //console.log(artistas);
    return artistas;
}