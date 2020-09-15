import React from "react";

function Player({ name, scores, clicked }) {
  return (
    <div className="player">
      {name}
      <div>{JSON.stringify(scores)}</div>
    </div>
  );
}

export default Player;
