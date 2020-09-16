import React from "react";

function Player({ name, scores, clicked }) {
  return (
    <div>
      <h3>{name}'s Predictions</h3>
      <table class="playerPredictions">
        <tr>
          <th>OU Score</th>
          <th>Opp Score</th>
        </tr>
        {scores.map(column => <tr><td>{column.ou}</td><td>{column.opp}</td></tr>)}
      </table>
    </div>
  );
}

export default Player;
