import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './Chart';
import { retrieveData } from './bridge';
import { registerables } from 'chart.js';
import { Chart } from "chart.js";
import { Data } from "./Data";

function App() {

  const [employeesData, setEmployeesData] = useState([]);

  Chart.register(...registerables);

  useEffect(()=>{
    retrieveData().then( data => {
      setEmployeesData(data.data);
      console.log("Employee data is set.");
    }).catch(error => {
      console.log("Error : ", error.message);
      //if the API call fails, uncomment code below to use manual data copied from the API
      // setEmployeesData(Data.data);
    });
  },[]);

  return (
    <div className="App">
      <BarChart data={employeesData}/>
    </div>
  );
}

export default App;