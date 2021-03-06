import axios from 'axios';


export const searchArtists = async ( token, search ) => {
    
    

    const {data} = await axios(`https://api.spotify.com/v1/search?limit=12&type=artist&q=${search}`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },
        json: true
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
            imgArtist: artist.images[2]?.url,
            hrefArtist: artist.href,
            followers: artist.followers.total,
            popularity: artist.popularity,

        })

    });

    //console.log(artistas);
    return artistas;
}