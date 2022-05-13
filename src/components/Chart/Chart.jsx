import React from "react";
import { Chart } from "react-google-charts";



const GlobalSalesChart = (props) =>{
let filteredGames =props.videosGames.filter((games=>games.year>=2013))


const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];


let gameplatform = filteredGames.map((game)=>{
    return game.platform
})

let newplatform = [...new Set(gameplatform)]


// games sale



let platformArrays = newplatform.map(platform=>{
    let gamingplatforms = filteredGames.filter(game =>  game.platform ==  platform);
    let totalsales = gamingplatforms.map((game)=>{
        return game.globalSales
    });
    

    let sum = totalsales.reduce(total ,currentnum)=>{
        total+currentnum,0
    }

    return [platform,sum,"silver"]
});

console.log(platformArrays)


  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  );
}


export default GlobalSalesChart;