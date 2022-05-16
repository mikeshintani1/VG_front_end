import React, { useState } from "react";
const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  function SearchResult(event) {
    event.preventDefault();
    let response = props.games.filter((element) => {
      if (element.name.includes(search)) {
        return true;
      } else if (element.platform.includes(search)) {
        return true;
      } else if (element.genre.includes(search)) {
        return true;
      } else if (element.publisher.includes(search)) {
        return true;
      }
    });
    props.setGames(response);
    setSearch("")
    if (search === ""){
      props.getGames()
    }
  }

  return (
    <div >
      <form onSubmit={SearchResult}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="game-btn" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
