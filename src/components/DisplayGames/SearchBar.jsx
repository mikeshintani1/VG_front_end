import React, { useState } from "react";

const SearchBar = (props) => {

    const [gameSearch, setGameSearch] = useState("");

    function searchBar(event) {
        event.preventDefault();
        let response = props.games.filter((games) => {

        if (games.name.include(gameSearch)) {
            return true;
        } else if (games.platform.include(gameSearch)){
            return true;
        } else if (games.year.include(gameSearch)){
            return true;
        } else if (games.genre.include(gameSearch)){
            return true;
        } else if (games.publisher.include(gameSearch)){
            return true;
        }
    });


props.setGames(response);

setGameSearch("")
    if (gameSearch === ""){
props.DisplayGames()
}}

    
return (
    <form onSubmit ={searchBar}>
        <div>
            <input
            className = 'searchbar'
            type='text'
            value={gameSearch}
            onChange={(e) => setGameSearch(e.target.value)}
            placeholder = "Game Search"
            />{" "}
            <button className="findgame" type='submit'>FIND GAME</button>
        </div>
    </form>
);
    }
export default SearchBar