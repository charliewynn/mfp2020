import React from "react";

function Player({ name, scores, clicked }) {
  return (
    <table>
      <th>{name}'s Predictions</th>
      <tr>
        <th>OU Score</th>
        <th>Opponent Score</th>
      </tr>
      {scores.map(column => <tr><td>{column.ou}</td><td>{column.opp}</td></tr>)}
    </table>
  );
}

export default Player;
