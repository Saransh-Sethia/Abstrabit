import React from "react";
import {PieChart, Pie, Cell, Legend} from "recharts";
import data from "./Data";
import "./Piechart.css";
import InputField from "./InputField";


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${data[index].value}(${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

const renderColorfulLegendText = (value ,entry) => {
    return (
      <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
        {value}
      </span>
    );
  };

const Piechart = () => {
    return(
        <div className="pie-container">
            <div className="pie1">
            <h2>Your FD Portfolio</h2>
<InputField />
</div>
<PieChart width={800} height={400}>
       <Legend
          height={75}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
          formatter={renderColorfulLegendText}
        />
                
    <Pie
    data={data}
    cx={120}
    cy={200}
    datakey="value"
    nameKey="company"
    labelLine={false}
    outerRadius={120}
    label={renderCustomizedLabel}
    legendType="circle"
    >
    </Pie>
</PieChart>
</div>
    )
}

export default Piechart;