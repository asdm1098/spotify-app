import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { SpotifyScreen } from '../components/spotify/SpotifyScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component= { LoginScreen } /> 
                    <Route exact path="/register" component= { RegisterScreen } /> 

                    <Route exact path="/" component= { SpotifyScreen } />

                    <Redirect  to="/" /> {/* puede ir ruta con component404 */}
                </Switch>
            </div>
        </Router>
    )
}
