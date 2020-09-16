import React, { useState } from "react";
import players from "./data/players.json";
import games from "./data/games.json";
import "./App.css";
import Player from "./components/Player";
// import Game from "./components/Game";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const sortedPlayers = players.players.sort(dynamicSort("name"));

  const selectedPlayerArea = () => {
    if (selectedPlayer) {
      return <Player {...selectedPlayer} />;
    }
    else {
      return <div>Click a player name</div>
    }
  };

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder === -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    } 
  }

  const playerClicked = player => {
    if (player === selectedPlayer) {
      setSelectedPlayer(null);
    }
    else {
      setSelectedPlayer(player);
    }
  };

  return (
    <div className="App">
      <header className="App-header">Mema's Football Pool 2020</header>
      <h3>Predictions:</h3>
      {sortedPlayers.map((p) => (
        <button key={p.name} onClick={() => playerClicked(p)}>
          {p.name}
        </button>
      ))}
      {selectedPlayerArea()}
      <h3>Schedule:</h3>
      {games.games.map((g) => (
        <a href={g.espnLink} key={g.description} target="_blank" rel="noopener noreferrer">
          <button>{g.description}</button>
        </a>
      ))}
    </div>
  );
}

export default App;
