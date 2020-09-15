import React, { useState } from "react";
import players from "./data/players.json";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const selectedPlayerArea = () => {
    if (selectedPlayer) {
      return <Player {...selectedPlayer} />;
    } else {
      return <div>Click a player name</div>;
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
    </div>
  );
}

export default App;
