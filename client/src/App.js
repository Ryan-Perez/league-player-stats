import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState("");
  

  console.log(playerData)
  return (
    <div className="App">
      <div className="container">
        <h5>League of Legends Player Searcher</h5>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick= {e => searchForPlayer(e)}>Search for player</button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
       <>
        <p>{playerData.name}</p>
        <img width="100" height="100" src={"http://ddragon.leaguoflengends.com/cdn/11/21/1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        <p>Summoner level {playerData.summonerlevel}</p> 
       </>
       : 
       <><p>no player data</p>
       </>
      }
    </div>
  );
}

export default App;
