"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import "./style.scss";

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
}

const GaugeChart = ({ value }) => {
  function getDialBgColor(value) {
    if (value >= 300 && value < 400) {
      return "#E5121B";
    } else if (value >= 400 && value < 500) {
      return "#FD4501";
    } else if (value >= 500 && value < 600) {
      return "#FF7A00";
    } else if (value >= 600 && value < 700) {
      return "#FFAF00";
    } else if (value >= 700 && value < 800) {
      return "#52DA20";
    }
    return "#2B8E44";
  }
  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "70%",
      backgroundColor: "transparent",
    },

    title: {
      text: "",
    },

    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: null,
      center: ["50%", "75%"],
      size: "110%",
    },

    // the value axis
    yAxis: {
      min: 300,
      max: 900,
      tickPixelInterval: 100,
      tickPosition: "inside",
      tickColor: "#FFFFFF",
      tickLength: 0,
      tickWidth: 0,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
          fontWeight: 600,
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 300,
          to: 400,
          color: "#E5121B", // green
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        {
          from: 400,
          to: 500,
          color: "#FD4501", // yellow
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        {
          from: 500,
          to: 600,
          color: "#FF7A00", // red
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        {
          from: 600,
          to: 700,
          color: "#FFAF00", // red
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        {
          from: 700,
          to: 800,
          color: "#52DA20", // red
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        {
          from: 800,
          to: 900,
          color: "#2B8E44", // red
          thickness: "100%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
      ],
    },
    series: [
      {
        name: "Credit Score",
        data: [value],
        tooltip: {
          valueSuffix: "",
        },
        dataLabels: {
          format: "{y}",
          borderWidth: 0,
          color: "#2A3485",
          x: 0,
          y: -50,
          style: {
            fontSize: "20px",
            textAlign: 'center',
          },
          backgroundColor: "#fff",
          shape: "circle",
          //   borderRadius: "50%",
            padding: 25,
          zIndex: 6,
        },
        dial: {
          radius: "80%",
          backgroundColor: getDialBgColor(value),
          baseWidth: 15,
          baseLength: "0%",
          rearLength: "0%",
          borderWidth: 2, // Set the border width
          borderColor: "#fff",
        },
        pivot: {
          backgroundColor: getDialBgColor(value),
          radius: 0,
        },
      },
    ],
    credits: {
      enabled: false, // Hide the Highcharts hyperlink
    },
  };

  return (
    <div className="gaugeChartContainer">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GaugeChart;
