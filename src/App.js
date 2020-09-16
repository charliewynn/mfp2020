import React, { useState } from "react";
import players from "./data/players.json";
import games from "./data/games.json";
import "./App.css";
import Player from "./components/Player";
// import Game from "./components/Game";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const selectedPlayerArea = () => {
    if (selectedPlayer) {
      return <Player {...selectedPlayer} />;
    } else {
      return <h3>^ Click a player name ^</h3>;
    }
  };


  return (
    <div className="App">
      <header className="App-header">Mema's Football Pool 2020</header>
      {players.players.map((p) => (
        <button key={p.name} onClick={() => setSelectedPlayer(p)}>
          {p.name}
        </button>
      ))}
      {selectedPlayerArea()}
      <h3>Schedule:</h3>
      {games.games.map((g) => (
        <a href={g.espnLink} target="_blank" rel="noopener noreferrer">
          <button>{g.description}</button>
        </a>
      ))}
    </div>
  );
}

export default App;
