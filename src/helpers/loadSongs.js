import axios from 'axios';


export const loadSongs = async ( token ) => {
    
    

    const {data} = await axios('https://api.spotify.com/v1/browse/categories?country=CO&locale=sv_SE&limit=12&offset=5', {
       
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


     
    const { items }  = data.categories;
    //console.log(items);
    
    const categories = [];
    

    items.forEach( category => {

        categories.push({
            
            idCategory: category.id,
            name: category.name,
            icon: category.icons[0].url,
            hrefCategory: category.href,
        })

    });

    //console.log(categories);
    return categories;
}