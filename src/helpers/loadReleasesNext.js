import axios from 'axios';


export const loadReleasesNext = async ( token, api ) => {
    
    

    const {data} = await axios(`${api}`, {

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
   
    
    const next = data.albums.next;
    const previous = data.albums.previous;
    

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
            nameArtist: snapHijo.artists[0].name,
        })

    });

    //releases.push( pagination );
    //console.log(releases);
    return {
        releases, next, previous
    };
}