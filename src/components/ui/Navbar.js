import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useLocation } from 'react-router-dom';

import queryString from 'query-string';

import { startLoadingArtists, startSearchArtist } from '../../actions/artists';
//import { startLogout } from '../../actions/auth';
import { /*activeSongs,*/ startLoadingSongs, startScreen, startSearchSong } from '../../actions/songs';
//import { searchSongs } from '../../helpers/searchSongs';
import { useForm } from '../../hooks/useForm';
import  logo  from '../../styles/images/Spotify.png';
import { activeReleases, startLoadingReleases } from '../../actions/releases';

export const Navbar = React.memo(() => {
    
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

    
    const [ formValues, handleInputChange, reset ] = useForm( {
        searchArtist: q,
        searchSong: q2,
    } );

    const { searchArtist, searchSong } = formValues;

    useEffect(() => {
        //console.log('ESTA ES LA PUTA RESPUESTA CORRECTA');
        
        dispatch(startLoadingReleases(token) );
        
    }, [token, dispatch]);

    const handleClickArtists = () => {
        if ( screen !== 'artists' && screen !== 'ActiveArtist' ){
            
            console.log('PRIMERA CARGA ARTISTAS CORRECTAMENTE');
            dispatch( startLoadingArtists( token ));
            reset()
            history.push('/artists');
        }
    }
    const handleSearchArtist = async(e) => {
        e.preventDefault();
        if( screen === 'ActiveArtist' ) {
            await history.replace(`/artists`);
        }
        if( searchArtist.trim().length > 0 ){
            dispatch( startSearchArtist( token, searchArtist) );
            await history.push(`?q=${ searchArtist }`);
            console.log('BUSQUEDA ARTISTA');
        }
    }
     

    const handleClickSongs = () => {
        if ( screen !== 'songs' && screen !== 'searchSong' ){
            
            console.log('PRIMERA CARGA CANCIONES');
            dispatch( startScreen() );
            dispatch( startLoadingSongs( token ));
            reset()
            history.push('/songs');

        }
    }

    const handleSearchSong = async(e) => {
        e.preventDefault();
        await history.push(`?q2=${ searchSong }`)

        if( searchSong.trim().length > 0 ){
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
    const handleClickIcon = async() => {
        //dispatch(startLoadingReleases(token))
        const pantalla = await screen;
        if ( pantalla === 'releases'){
            console.log('PANTALLA IGUAL');
        }else{
            history.push('/');
            dispatch(activeReleases('releases', 'New releases'));
            console.log('Click logo');
        }
        
    }

    //console.log('LLAMADO A NAVBAR');
    
    return (

        <div className="navbar navbar-dark navbar-gray">
            
            <nav className="navbar-content row">
                <div  className="navbar-brand"
                    style= {{ cursor: "pointer"}}
                    onClick={ handleClickIcon}
                >
                    <img style={{marginLeft:'20px'}} src={logo} className="d-inline-block align-top card-img-logo" alt="home"/>
                </div>
            </nav>

            <form onSubmit ={ handleSearchArtist } className="form-inline my-2 my-lg-0" >

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
                            width: '20vw', marginRight:'30px'
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
                    width: '20vw', marginRight: '90px',
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
})