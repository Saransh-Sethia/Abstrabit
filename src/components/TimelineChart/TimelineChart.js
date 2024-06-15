import React from "react";
import { Chart } from "react-google-charts";
import './TimelineChart.css';

export const data = [
  [
    { type: "string", id: "Term" },
    { type: "string", id: "Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  ["1", "Utkarsh FD1", new Date(2024, 1, 1), new Date(2024, 7, 31)],
  ["2", "Shriram FD Plan2", new Date(2024, 1, 1), new Date(2025, 4, 30)],
  ["3", "Bajaj Finserv", new Date(2024, 5, 1), new Date(2025, 4, 15)],
  ["4", "Mahindra FD Plan2", new Date(2024, 6, 1), new Date(2026, 7, 10)],
];

const TimelineChart = () =>  {
  return (
    <div className="chart">
        <h2>FD Maturity  Timeline</h2>
    <Chart
      chartType="Timeline"
      options={{
        timeline: {
          colorByRowLabel: true,
          singleColor: "#1108c4",
        },
      }}
      data={data}
     width="600px"
      height="400px"
    />
    </div>
  );
}

export default TimelineChart
