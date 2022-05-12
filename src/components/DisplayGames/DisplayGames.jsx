import React from "react";
const DisplayGames = (props) => {
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
        {props.games.map((element) => {
          return (
            <tr key = {element.id}>
              <td>{element.name}</td>
              <td>{element.platform}</td>
              <td>{element.year}</td>
              <td>{element.genre}</td>
              <td>{element.publisher}</td>
              <td><button>View Status</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayGames;
