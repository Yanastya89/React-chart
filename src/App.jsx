import { useState } from 'react'
import './App.css'
import { Chart } from "react-google-charts";


export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 3],
  ["Еда", 2],
  ["Учеба", 2],
  ["Общение", 2],
  ["Дети", 8],
  ["Сон", 7],
];

export const options = {
  title: "Мой день",
  is3D: true,
};


function App() {

  return (
    <>
     <Chart
chartType="PieChart"
data={data}
options={options}
width={"100%"}
height={"400px"}
/>

<Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"400px"}
    />
    </>
  )
}

export default App
