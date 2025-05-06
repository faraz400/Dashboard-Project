import React from "react";
import { useSelector } from "react-redux";  //redux store sa data lana ka lia
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const AnalyticsChart = () => {
  const chartData = useSelector((state) => state.analytics.chartData);// redux slice use in 
//useselector redux store sa data lana ka lia
//state.analytics.chartdata  analytics reducer ka andar chardata array
  return (
    <div className="widget">
      <h3>Analytics Chart</h3>
      <LineChart   //Is chart ke andar wohi data map ho raha hai jo Redux mein saved hai
        width={400}
        height={300}
        data={chartData} //chart ko redux ka data mill raha 
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart> 
    </div>
  );
};

export default AnalyticsChart;
