import "./App.css";
import React, { useState, useEffect } from "react";
import DisplayGames from "./components/DisplayGames/DisplayGames";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import GlobalSalesChart from "./components/Chart/Chart"
import QuestionChart from "./components/Chart/Question"
function App() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      let response = await axios.get("https://localhost:7260/api/videogames");
      setGames(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">
      <nav style={{display: "flex", justifyContent: "space-evenly"}} className=" navbar navbar-expand-lg navbar-light bg-light">
        <div className="title">
        <img className="con-icon" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-game-seo-flaticons-flat-flat-icons.png"/>

      <h1 >Video Games</h1>
</div>
      <SearchBar games ={games} setGames = {setGames} getGames={getGames}/>
      </nav>
      <GlobalSalesChart  videosGames = {games}/>
      <DisplayGames games={games} setGames = {setGames}/>
      <div className="custom-chart">
      <QuestionChart videosGames = {games}/>
      </div>
    </div>
  );
}

export default App;
