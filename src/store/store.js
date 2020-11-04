import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


import { artistsReducer } from '../reducers/artistsReducer';
import { authReducer } from '../reducers/authReducer';
import { releasesReducer } from '../reducers/releasesReducer';
import { songsReducer } from '../reducers/songsReducer';
import { spotifyReducer } from '../reducers/spotifyReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    spotify: spotifyReducer,
    releases: releasesReducer,
    artists: artistsReducer,
    songs: songsReducer
});


export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);