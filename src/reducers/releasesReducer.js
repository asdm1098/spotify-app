

/*

    releases: [],


    {
        albums: {
            href: 'urlspotify de la petiton general end point ,
            items: [
                {
                    album_type: 'single',
                    artists: [ //artistas del almbun con la siguiente info c/u
                        {
                            external_urls: {
                                spotify: 'login spotify que contiene el perfil del artista'
                            },
                            href: 'https://api.spotify.com/v1/artists/14vNE9iqS5eGAL6OogiN8g', //link de petición con usuario
                            id: 'aqui va el id del artista del album',
                            name: 'nombre del artista',
                            type: 'artista', ,
                            uri: 'link que abre la aplicacion',
                        }
                    ],
                    avaliable_markets: [
                        CO, //contiene cada uno de los paises donde esta disponible
                    ],
                    external_urls: {
                        spotify: 'link del album de spotify' en la web;
                    },
                    href: 'https://api.spotify.com/v1/albums/5Ok2ayEuY1g4IChRr3ddsC' //link de endpoInt para obtener el album,
                    id: '5Ok2ayEuY1g4IChRr3dds' //ID Del album,
                    images: [  ///imagenes del album en diferentes dimensiones
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273fb4d0ba3975967384e247596",
                            "width": 640
                        },
                        {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02fb4d0ba3975967384e247596",
                        "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851fb4d0ba3975967384e247596",
                            "width": 64
                        }
                    ], ///INFORMACIÓN DEL ALBUM GENERAL
                    "name": "Tror du att han bryr sig", //NOMBRE DEL ALBÚM
                    "release_date": "2020-10-31",          //FECHA DEL LANZAMIENTO
                    "release_date_precision": "day",          //DIA PRECISO  
                    "total_tracks": 1,                          //PISTAS
                    "type": "album",                            //TIPO
                    "uri": "spotify:album:5Ok2ayEuY1g4IChRr3ddsC"   //ABRIR ALBUM DESDE LA APLICACIÓN

                },
                {
                        asi continua con la cantidad de data
                },
            ],
            //PARAMETROS DEL API END POINT
            "limit": 36,
            "next": "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=36&limit=36",
            "offset": 0,
            "previous": null,
            "total": 100
        }
    }

    
    initState = {
        releases: [
           
            {
                items:[
                    {   
                        id: 'id del album'
                        name: 'nombre album',
                        artistis:[
                            {
                                href: 'peticion al artista endPoint API',
                                name: 'nombre del artista',
                            }
                        ]
                        images[1]:{
                            height: '300',
                            url:   'url de la imagen',
                            width: '300'
                        } 

                    },
                ]
                
                limit: 'cantidad en la peticion',
                next: 'nueva petición a la API, paginación',
                previos:'null',
            
            }
        ],
    }

    active: null,
    active: {
        id: 'asdasd'
    }

*/

import { types } from "../types/types";

const initState = {
    releases: [], 
    next: null,
    previous: null
}


export const releasesReducer = ( state = initState, action ) => {

    switch ( action.type ) {
        
        case types.releasesLoad: {

            return{
                ...state,
                releases: [...action.payload.releases],
                next: action.payload.next,
                previous: action.payload.previous
            }

        }
    
        default:
            return state;
    }


}