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
      <h1>Video Games</h1>
      <SearchBar games ={games} setGames = {setGames} getGames={getGames}/>
      <GlobalSalesChart videosGames = {games}/>
      <DisplayGames games={games} setGames = {setGames}/>
      <QuestionChart videosGames = {games}/>
    </div>
  );
}

export default App;
