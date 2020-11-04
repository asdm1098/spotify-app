import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

//import { login, startSpotifyLogin } from '../actions/auth';
//import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loginSpotify } from '../actions/auth';

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [ cheking, setCheking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
        
    const token = localStorage.getItem('token');
    
    useEffect( () => {
        console.log( token );
        if(  token != null ) {
            console.log('SI HAY TOKEN ');

            dispatch( loginSpotify(token));
            setIsLoggedIn( true )
        }else {
            console.log('NO HAY TOKEN ! ');
            setIsLoggedIn( false );
        }

        setCheking( false );

        
    
    }, [token, dispatch]);


    if ( cheking ) {
        return (
            <h1 style={{color: "white"}}>Waiting...</h1>
        )
    }

   

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" isAuthenticated = { isLoggedIn } component= { AuthRouter } /> 
                    
                    <PrivateRoute path="/" isAuthenticated = { isLoggedIn } component= { DashboardRoutes } />

                    <Redirect  to="/auth/login" /> {/* puede ir ruta con component404 */}
                </Switch>
            </div>
        </Router>
    )
}
