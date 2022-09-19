import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import WineData from "./WineData.json";
import "../components/echart.css"

const xAxis = WineData.map(
  function (index) {
    return index.Alcohol
  }
)
const yAxis = WineData.map(
  function (index) {
    return index.MalicAcid
  }
)

const Barchart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    legend: {
      data: xAxis,
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
        name:"Alcohol",
        data: xAxis,
        type: "bar",
        smooth: true,
      },
      {
        name:"Malic Acid",
        data: yAxis,
        type: "bar",
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
      <h1 className="title">Wine Data-Bar-chart</h1>
      <div className="container">
        <ReactECharts option={options} />
      </div>
    </div>
  );
};

export default Barchart;
