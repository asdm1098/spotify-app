import axios from 'axios';


export const loadArtists = async ( token ) => {
    
    

    const {data} = await axios('https://api.spotify.com/v1/artists?ids=2lLqHBjAnD1QyH24pOPoH6,3P6ePaE5unCm7vjccfcBAe,6R21HSNyo7HVac8pyqY3T2,2fVW2ix4ANKiofDZIsy1XR,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,14vNE9iqS5eGAL6OogiN8g,7jEEE187pVG6InOxn03oA5,68QvqbdqwqqjW39YpUJHdG,22nh3odnqoCNzVGwEzXILk,5CPsScBTPYY11Lv4Eb7k4t,4SqTiwOEdYrNayaGMkc7ia', {
       
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token },

        })/*.then ( ({data}) => {
            console.log('ESTÁ ES LA RESPUESTA: ');
            console.log( data );
            
        })
        .catch( err => {
            console.log('FALLO LA PETICIÓN MI BRO :( ');
            console.log( err );
        })*/

    //console.log(data);

    const {artists} = data;
    //console.log(artists);
    
    const artistas = [];
    

    artists.forEach( artist => {

        artistas.push({
            
            idArtist: artist.id,
            name: artist.name,
            imgArtist: artist.images[1].url,
            hrefArtist: artist.href,
            followers: artist.followers.total

        })

    });

    //console.log(artistas);
    return artistas;
}