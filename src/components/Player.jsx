import React from "react";

function Player({ name, scores, clicked }) {
  return (
    <div className="player">
      <table>
        <th>{name}'s Predictions</th>
        <tr>
          <th>OU Score</th>
          <th>Opponent Score</th>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[0].ou)}</td>
          <td>{JSON.stringify(scores[0].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[1].ou)}</td>
          <td>{JSON.stringify(scores[1].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[2].ou)}</td>
          <td>{JSON.stringify(scores[2].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[3].ou)}</td>
          <td>{JSON.stringify(scores[3].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[4].ou)}</td>
          <td>{JSON.stringify(scores[4].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[5].ou)}</td>
          <td>{JSON.stringify(scores[5].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[6].ou)}</td>
          <td>{JSON.stringify(scores[6].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[7].ou)}</td>
          <td>{JSON.stringify(scores[7].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[8].ou)}</td>
          <td>{JSON.stringify(scores[8].opp)}</td>
        </tr>
        <tr>
          <td>{JSON.stringify(scores[9].ou)}</td>
          <td>{JSON.stringify(scores[9].opp)}</td>
        </tr>
      </table>
    </div>
  );
}

export default Player;
