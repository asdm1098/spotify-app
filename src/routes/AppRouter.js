import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loginSpotify, startSpotifyLogin } from '../actions/auth';

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    

    const [ cheking, setCheking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
       
        if(  token != null ) {
            console.log('SI HAY TOKEN ');
    
            dispatch( loginSpotify(token));
            setIsLoggedIn( true )
        }else {
            console.log('NO HAY TOKEN ! ');
            dispatch(startSpotifyLogin());
            setIsLoggedIn( false );
        }
    
        setCheking( false );
        console.log('::TOKEN:: ', token);
    }, [dispatch])
    



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
