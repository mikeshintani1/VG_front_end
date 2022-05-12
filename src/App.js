import './App.css';
import React, { useState, useEffect } from 'react';
import DisplayGames from './components/DisplayGames/DisplayGames';
import axios from 'axios';
import SearchBar from './components/DisplayGames/SearchBar';


function App() {

  const [games, setGames] = useState([])

  const getGames = async () => {
    let response = await axios.get("https://localhost:7260/api/videogames");
    console.log(response.data)
    setGames(response.data)
  };

  useEffect(()=>{
    getGames()
  },[])



  return (
    <div className="App">
      <SearchBar setGames={setGames}/>
      <h1>Video Games</h1>
      <DisplayGames games={games}/>
    </div>
  );
}

export default App;
