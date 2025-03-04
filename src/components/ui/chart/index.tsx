import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltip } from "./tooltip";
import { Box } from "@chakra-ui/react";

const data = [
  { name: "year 1", value: 180000 },
  { name: "", value: 320000 },
  { name: "", value: 480000 },
  { name: "year 2", value: 640000 },
  { name: "", value: 380000 },
  { name: "", value: 550000 },
  { name: "", value: 350000 },
  { name: "year 3", value: 900000 },
];

export const Analytics = () => {
  return (
    <Box height="400px" width="100%">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="1.7%" stopColor="#1CCFBD" />
              <stop offset="105.41%" stopColor="#2C9BF0" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(28, 207, 189, 0.1)" />
              <stop offset="100%" stopColor="rgba(44, 155, 240, 0.02)" />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            horizontal={true}
            stroke="#e0e0e0"
            strokeDasharray="3 1"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999999" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999999" }}
            tickFormatter={(value) => `${value / 1000}K`}
          />
          <Tooltip content={<ChartTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#colorGradient)"
            fill="url(#areaGradient)"
            strokeWidth={2}
            dot={{
              stroke: "#2C9BF0",
              strokeWidth: 2,
              fill: "#FFFFFF",
              r: 4,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
