import React from "react";
import { Chart } from "react-google-charts";

const GlobalSalesChart = (props) => {
  const option = {
    title: "Global Sales Per Platform",
    vAxis: {title: 'Sales per Million'},
    hAxis: {title: 'Platform'},
    legend:"none"
  }
  function Data() {
    // year greater 2013
    let filteredGames = props.videosGames.filter((games) => games.year >= 2013);
// Game consoles filtered to variable 
    let gameplatform = filteredGames.map((game) => {
      return game.platform;
    });
// unique list of consoles
    let newplatform = [...new Set(gameplatform)];

    // games sale

    let platformArrays = newplatform.map((platform) => {
      let gamingplatforms = filteredGames.filter(
        (game) => game.platform === platform
      );
      let totalsales = gamingplatforms.map((game) => {
        return game.globalSales;
      });

      let sum = totalsales
        .reduce((total, currentnum) => total + currentnum, 0)
        .toFixed(2);


    function choose(){
      let color = (['#a2a2d0', 'light blue', '#1e90ff','navy blue','#3f00ff'])
      let index = Math.floor(Math.random()* color.length);
      return color[index]
    }


  
      
            
          
      

      return [platform, parseFloat(sum),choose()];
    });

    const data = [
      ["Platform", "Sales(per million)", { role: "style" }],
      ...platformArrays,
    ]; // CSS-style declaration
    return data;
  }

  return (
    <div className="box">
    <Chart chartType="ColumnChart" width="100%" height="400px" data={Data()} options={option}/></div>
  );
};

export default GlobalSalesChart;
