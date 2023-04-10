import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";

const assignmentMarks = [
  {
    id: 1,
    name: "A-1",
    GetMarks: 57,
    SubmitMarks: 60,
  },
  {
    id: 2,
    name: "A-2",
    GetMarks: 60,
    SubmitMarks: 60,
  },
  {
    id: 3,
    name: "A-3",
    GetMarks: 60,
    SubmitMarks: 60,
  },
  {
    id: 4,
    name: "A-4",
    GetMarks: 55,
    SubmitMarks: 60,
  },
  {
    id: 5,
    name: "A-5",
    GetMarks: 49,
    SubmitMarks: 50,
  },
  {
    id: 6,
    name: "A-6",
    GetMarks: 45,
    SubmitMarks: 60,
  },
  {
    id: 7,
    name: "A-7",
    GetMarks: 60,
    SubmitMarks: 60,
  },
  {
    id: 8,
    name: "A-8",
    GetMarks: 50,
    SubmitMarks: 60,
  },
];

const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="px-5" >
      <div className="text-3xl font-bold text-center py-10">
        <h2 className="py-8 mb-10">Assignment 1 to 8 All Result</h2>
        <div className="">
          <BarChart width={1280} height={300} data={assignmentMarks}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="GetMarks" fill="#EC4899" />
            <Bar dataKey="SubmitMarks" fill="#A855F7" />
          </BarChart>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default Statistics;

// import React, { PureComponent } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [

//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" />
//           <Bar dataKey="uv" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
