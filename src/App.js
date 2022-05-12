import './App.css';
import React, { useState, useEffect } from 'react';



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
    </div>
  );
}

export default App;
