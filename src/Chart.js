import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props){

    const chartData = {
        labels: props.data.map((data) => data.employee_name),
        datasets: [
            {
                label: "Employee Salaries",
                data: props.data.map((data) => data.employee_salary),
                backgroundColor: "rgba(241,200,34,1)",
                borderColor: "black",
                borderWidth: 1
            }
        ]
    };

    return(
        <div className="chart-container">
            <h2>Employee Salary</h2>
            <Bar 
            data={chartData}
            options={{
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
             />
        </div>
    );
}

export default BarChart;