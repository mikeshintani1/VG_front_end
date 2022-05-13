import React from "react";
const DisplayGames = (props) => {
  function currentGameStats(name) {
    let response = props.games.filter((element) => {
      if (element.name === name) {
        return true;
      }
    });
    props.setGames(response);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Platform</th>
          <th scope="col">Year</th>
          <th scope="col">Genre</th>
          <th scope="col">Publisher</th>
        </tr>
      </thead>
      <tbody>
        {props.games
          .filter((game) => game.year >= 2013)
          .map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.platform}</td>
                <td>{element.year}</td>
                <td>{element.genre}</td>
                <td>{element.publisher}</td>
                <td>
                  <button onClick={() => currentGameStats(element.name)}>
                    View Status
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DisplayGames;
