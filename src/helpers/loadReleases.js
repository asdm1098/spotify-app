import axios from 'axios';


export const loadReleases = async ( token ) => {
    
    

    const {data} = await axios('https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=12', {

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
        
    const {items} = data.albums;
    //console.log(items);
    
    const releases = [];
    

    items.forEach( snapHijo => {

        releases.push({
            
            idAlbum: snapHijo.id,
            name: snapHijo.name,
            imgAlbum: snapHijo.images[1].url,
            hrefAlbum: snapHijo.href,
            hrefArtist: snapHijo.artists[0].href,
            idArtist: snapHijo.artists[0].id,
            nameArtist: snapHijo.artists[0].name

        })

    });

    //console.log(releases);
    return releases;
}

