import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import WineData from "./WineData.json";
import "../components/echart.css"

const xAxis = WineData.map(
  function (index) {
    return index.ColorIntensity
  }
)
const yAxis = WineData.map(
  function (index) {
    return index.Hue
  }
)

const Echart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    legend: {
      data:[ xAxis,yAxis],
    },
    xAxis: {
      type: "category",
      data: xAxis,
    },
    yAxis: {
      type: "value",
      data: yAxis
    },
    series: [
      {
        name:"Hue",
        data: xAxis,
        type: "scatter",
        smooth: true,
      },
      {
        name:"ColorIntensity",
        data: yAxis,
        type: "scatter",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  useEffect(() => {
    console.log(WineData)
  }, [])
  useEffect(() => {
    console.log("first", xAxis)
  }, [])
  useEffect(() => {
    console.log("2nd", yAxis)
  }, [])

  return (
    <div>
      <h1 className="title">Wine Data-Scatter-chart</h1>
      <div className="container">
        <ReactECharts option={options} />
      </div>
    </div>
  );
};

export default Echart;
