import React from "react";
import { Chart } from "react-google-charts";

const GlobalSalesChart = (props) => {
  function Data() {
    let filteredGames = props.videosGames.filter((games) => games.year >= 2013);

    let gameplatform = filteredGames.map((game) => {
      return game.platform;
    });

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

      return [platform, parseFloat(sum), "blue"];
    });

    const data = [
      ["Platform", "Sales(per million)", { role: "style" }],
      ...platformArrays,
    ]; // CSS-style declaration
    return data;
  }

  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={Data()} />
  );
};

export default GlobalSalesChart;
