import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import queryString from 'query-string';

import { startLoadingArtists, startScreenArtists, startSearchArtist } from '../../actions/artists';
import { startLogout } from '../../actions/auth';
import { activeReleases } from '../../actions/releases';
import { /*activeSongs,*/ startLoadingSongs, startScreen, startSearchSong } from '../../actions/songs';
//import { searchSongs } from '../../helpers/searchSongs';
import { useForm } from '../../hooks/useForm';
import  logo  from '../../styles/images/Spotify.png';

export const Navbar = () => {
    
    const history = useHistory();
    const location = useLocation();
    //console.log(location);
    
    const { q = '' } = queryString.parse( location.search );
    //console.log(q);
    const dispatch = useDispatch();

    const {name, token } = useSelector(state => state.auth);
    const { loading } = useSelector( state => state.ui);
    const { screen } = useSelector(state => state.spotify);

     const [ formValues, handleInputChange ] = useForm( {
        searchArtist: q,
        searchSong: '',
    } );

    const { searchArtist, searchSong } = formValues;
    const [search, setSearch] = useState(searchArtist);
    const [search2, setSearch2] = useState(searchSong);
    
    const handleClickArtists = () => {
        if ( screen !== 'artists' ){
            
            console.log('PRIMERA CARGA ARTISTAS CORRECTAMENTE');

            dispatch( startScreenArtists() );
            dispatch( startLoadingArtists( token ));
            history.push('/artists');
            //history.push(` ?q=${ searchArtist }`)
        }
    }
 
    

    const handleSearchArtist = async(e) => {
        await history.push(`?q=${ searchArtist }`);
        e.preventDefault();
        
       // console.log('SEARCH ARTIST:', searchArtist);
       // console.log('SEARCH: ', search);

       setSearch( searchArtist );
       
       

       if( search !== searchArtist && searchArtist !== '' ) {
           
            
           dispatch( startSearchArtist( token, searchArtist) );
           dispatch( startScreenArtists() );

            
            
            setSearch( searchArtist )
           

            console.log( searchArtist );

        } else { console.log('Repitiendo busqueda');}

        if( searchArtist === '' && search !== '' ){
            dispatch( startScreenArtists() );
            console.log('AL INICIO DEL SCREEN');
        }

        
    }


    const handleClickSongs = () => {
        if ( screen !== 'songs' && screen !== 'searchSong' ){
            
            console.log('PRIMERA CARGA CANCIONES');
            history.push('/songs');
            dispatch( startScreen() );
            dispatch( startLoadingSongs( token ));
            //history.push(` ?q=${ searchArtist }`)
        }
    }

    const handleSearchSong = (e) => {
        e.preventDefault();
        //history.push(`?q=${ searchSong }`)
      
        setSearch2( searchSong );

        if( search2 !== searchSong && searchSong !== '' ) {

            dispatch( startSearchSong( token, searchSong) );
            
            //dispatch( startScreen() );
            
            //history.push(` ?q=${ searchArtist }`)
            setSearch( searchSong )
            console.log( 'BUSQUEDA CANCIÓN:', searchSong );

        } else { console.log('Repitiendo busqueda CANCIÓN');}

        if( searchSong === '' && search2 !== '' ){
            dispatch( startScreen() );
            console.log('AL INICIO DEL SCREEN SONG');
        }
    }

    const handleLogout = () => {
        history.replace('/login');
        dispatch( startLogout() );
    }

    const handleHome = () => {
        history.replace('/');
        dispatch( activeReleases('releases', 'New releases'));
    }
    
    return (

        <div className="navbar navbar-dark navbar-gray">
            <nav className="navbar">
                <a  className="navbar-brand"
                    onClick={ handleHome }
                    style= {{ cursor: "pointer"}}
                >
                    <img src={logo} className="d-inline-block align-top card-img-logo" alt="home"/>
                </a>
            </nav>

            <form onSubmit={ handleSearchArtist } className="form-inline my-2 my-lg-0" >
            {/*<i className="fas fa-search"></i>*/}
                
                <input 
                    type="text"
                    className="form-control fas"
                    placeholder= "&#xf002; Find artist"
                    name="searchArtist"
                    autoComplete="off"
                    disabled={loading}
                    value= { searchArtist }
                    onClick= {handleClickArtists}
                    onChange= { handleInputChange }
                    style={{background: '#333333', border: 'none', color: 'gray',
                            width: '20vw'
                    }}
                    
                />
            </form>
           
            <form onSubmit={ handleSearchSong } className="form-inline my-2 my-lg-0" >
                
                <input 
                    type="text"
                    placeholder="&#xf002; Find song"
                    className="form-control fas"
                    name= "searchSong"
                    autoComplete= "off"
                    disabled = { loading }
                    value={ searchSong }
                    onClick = { handleClickSongs }
                    onChange = { handleInputChange }
                    style={{background: '#333333', border: 'none', color: 'gray',
                    width: '20vw',
                    }}
                />
                
            </form>
            
            <span style={{ color: "white"}}>{ name }</span>         
            <button 
                className="btn btn-outline-success"
                onClick = { handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Logout </span>
            </button>
            
        </div>
        
    )
}