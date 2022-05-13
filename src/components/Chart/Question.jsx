import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Top 4 Games ",
  curveType: "function",
  legend: { position: "bottom" },
  vAxis: {title: 'Rank', baseline:15},
  hAxis: {title: 'Year', baseline:2010},
  
};
const QuestionChart = (props) => {
  function topgames() {
    let Bestgames = props.videosGames.filter(
      (element) => element.rank >= 1 && element.rank < 10
    );
    let newGames =Bestgames.map((game) => {
      return [  game.name,game.year,game.rank];
    });
    
    const data = [[ "Name", "Year","Rank"], ...newGames,];
    console.log(data)
    return data;
  }

  return (
    <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={topgames()}
      options={options}
    />
  );
};



export default QuestionChart;

//     let gameplatform = filteredGames.map((game) => {
//       return game.platform;
//     });
//     let newplatform = [...new Set(gameplatform)];
//     // games sale
//     let platformArrays = newplatform.map((platform) => {
//       let gamingplatforms = filteredGames.filter(
//         (game) => game.platform == platform
//       );
//       let totalsales = gamingplatforms.map((game) => {
//         return game.globalSales;
//       });
//       let sum = totalsales
//         .reduce((total, currentnum) => total + currentnum, 0)
//         .toFixed(2);
//       return [platform, parseFloat(sum), "silver"];
//     });
//     const data = [
//       ["Platform", "Sales(per million)", { role: "style" }],
//       ...platformArrays] // CSS-style declaration
//     ;
//     return data;
//Top 3 games by rank
// const QuestionChart = (props) => {
//   //   function Data() {}

//   return (
//     <Chart
//       chartType="LineChart"
//       width="100%"
//       height="400px"
//       data={data}
//     //   options={options}
//     />
//   );
// };