import axios from 'axios';


export const getArtistById = async ( artistId, token ) => {
    
    

    const {data} = await axios(`https://api.spotify.com/v1/artists/${ artistId}`, {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })/*.then ( Response => {
            console.log('ESTA ES LA RESPUESTA: ');
            console.log( Response );
            
        })
        .catch( err => {
            console.log('FALLO LA PETICIÓN MI BRO :( ');
            console.log( err );
        })*/

            
        const artist = [];
        
    
        artist.push({
                    
                    idArtist: data.id,
                    name: data.name,
                    imgArtist: data.images[0]?.url,
                    hrefArtist: data.href,
                    followers: data.followers.total,
                    popularity: data.popularity,
                    type: data.type
        
        })
    

    //console.log(artist);
    
    return artist;

}