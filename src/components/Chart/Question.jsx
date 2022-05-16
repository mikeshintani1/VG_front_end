import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Top 10 Ranked Games ",
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

