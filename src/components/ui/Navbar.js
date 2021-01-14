import React, { /*useState*/ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useLocation } from 'react-router-dom';

import queryString from 'query-string';

import { startLoadingArtists, startSearchArtist } from '../../actions/artists';
//import { startLogout } from '../../actions/auth';
import { /*activeSongs,*/ startLoadingSongs, startScreen, startSearchSong } from '../../actions/songs';
//import { searchSongs } from '../../helpers/searchSongs';
import { useForm } from '../../hooks/useForm';
import  logo  from '../../styles/images/Spotify.png';

export const Navbar = () => {
    
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    //console.log(location);
    
    const { q = '' } = queryString.parse( location.search );
    const { q2 = '' } = queryString.parse( location.search );
    //console.log(q);

    const {name, token } = useSelector(state => state.auth);
    const { loading } = useSelector( state => state.ui);
    const { screen } = useSelector(state => state.spotify);

     const [ formValues, handleInputChange ] = useForm( {
        searchArtist: q,
        searchSong: q2,
    } );

    const { searchArtist, searchSong } = formValues;
    
    const handleClickArtists = () => {
        if ( screen !== 'artists' && screen !== 'ActiveArtist' ){
            
            console.log('PRIMERA CARGA ARTISTAS CORRECTAMENTE');
            dispatch( startLoadingArtists( token ));
            history.push('/artists');
        }
    }
     
    const handleSearchArtist = async(e) => {
        e.preventDefault();
        
        if( screen === 'ActiveArtist' ) {
            await history.replace(`/artists`);
        }
        if( searchArtist.trim().length > 2 ){
            await history.push(`?q=${ searchArtist }`);
            dispatch( startSearchArtist( token, searchArtist) );
            console.log('BUSQUEDA ARTISTA');
        }
    }

    const handleClickSongs = () => {
        if ( screen !== 'songs' && screen !== 'searchSong' ){
            
            console.log('PRIMERA CARGA CANCIONES');
            dispatch( startScreen() );
            dispatch( startLoadingSongs( token ));
            history.push('/songs');

        }
    }

    const handleSearchSong = async(e) => {
        e.preventDefault();
        await history.push(`?q2=${ searchSong }`)

        if( searchSong.trim().length > 2 ){
            dispatch( startSearchSong( token, searchSong) );
            console.log('BUSQUEDA CANCIÓN');
        }else {
            dispatch( startScreen() );
            console.log('AL INICIO DEL SCREEN SONG');
        }
    }

    /*const handleLogout = () => {
        dispatch( startLogout() );
    }*/

    
    
    return (

        <div className="navbar navbar-dark navbar-gray">
            <nav className="navbar-content row">
                <a  className="navbar-brand"
                    href= "/"
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
            {/*<button 
                    className="btn btn-outline-success"
                    onClick = { handleLogout }
                >
                    <i className="fas fa-sign-out-alt"></i>
            </button>*/}
            
        </div>

        
        
    )
}