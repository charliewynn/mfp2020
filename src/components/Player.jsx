import React from "react";

function Player({ name, scores, clicked }) {
  return (
    <div>
      <h3>{name}'s Predictions</h3>
      <table class="playerPredictions">
        <thead>
          <tr>
            <th>OU Score</th>
            <th>Opp Score</th>
          </tr>
        </thead>
        <tbody>{scores.map((column, i) => <tr key = {i}><td>{column.ou}</td><td>{column.opp}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export default Player;
