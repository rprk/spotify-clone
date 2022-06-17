import React, { useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import spotifyWebApi from 'spotify-web-api-js';

const spotify = new spotifyWebApi(); 

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

    spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });

  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type:"SET_PLAYLISTS",
      playlists:playlists,
    });
  });
    
  spotify.getPlaylist('0YZCLbmGevcP03LNXcdA7z').then(response=>
  dispatch({
    type:"SET_DISCOVER_WEEKLY",
    discover_weekly: response,
  })
  )

   }

  }, []);
     
  


  return (
    <div className="App">
       {
         token ? (
           <Home spotify={spotify}/>
         ):
         (
           <Login/>
         )
       }
    </div>
  );
}

export default App;
