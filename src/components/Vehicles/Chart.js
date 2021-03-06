/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import './Chart.scss';

const Chart = (props) => {
    let datarestored = props?.datatochart;
    const [monthEarning, setMonthEarning] = useState("bookings");
    const [days, setDays] = useState("Max");
    console.log(props, days, monthEarning, "props in charrt")
    const chartConfig = {
        type: "line",
        data: {
            labels: datarestored?.bookings?.Max?.labelsname,
            datasets: [
                {
                    data: datarestored?.bookings?.Max?.datavalue,
                    
                    borderColor: [
                        "rgba(66, 66, 66, 1)"
                    ],
                    borderWidth: 1.2
                }
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            elements:{
                point:{
                    borderWidth: 0,
                    radius: 2.2,
                    backgroundColor: 'rgba(66,66,66,1)'
                }
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    };

    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [datarestored]);


    const updateDataset = (datasetIndex, newData, newda) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.data.labels = newda;
        chartInstance.update();
    };

    return (
        <div>
            <span className="statistics mr-2">Statistics</span>
            <button className={monthEarning === "bookings" ? "btncr true" : "btncr false"} onClick={() => { setMonthEarning("bookings"); setDays("Max"); updateDataset(0, datarestored?.bookings?.Max?.datavalue, datarestored?.bookings?.Max?.labelsname); }}>Bookings</button>
            <button className={monthEarning === "earnings" ? "btncr true" : "btncr false"} onClick={() => { setMonthEarning("earnings"); setDays("Max"); updateDataset(0, datarestored?.earnings?.Max?.datavalue, datarestored?.earnings?.Max?.labelsname); }}>Earnings</button>

            {monthEarning === "bookings" ? (
                <span className="flr">
                    <button className={(monthEarning === "bookings" && days === "Day") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.bookings?.Day?.datavalue, datarestored?.bookings?.Day?.labelsname); setDays("Day") }}>D</button>
                    <button className={(monthEarning === "bookings" && days === "Week") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.bookings?.Week?.datavalue, datarestored?.bookings?.Week?.labelsname); setDays("Week") }}>W</button>
                    <button className={(monthEarning === "bookings" && days === "Month") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.bookings?.Month?.datavalue, datarestored?.bookings?.Month?.labelsname); setDays("Month") }}>M</button>
                    <button className={(monthEarning === "bookings" && days === "Year") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.bookings?.Year?.datavalue, datarestored?.bookings?.Year?.labelsname); setDays("Year") }}>Y</button>
                    <button className={(monthEarning === "bookings" && days === "Max") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.bookings?.Max?.datavalue, datarestored?.bookings?.Max?.labelsname); setDays("Max") }}>Max</button>
                </span>
            ) : (
                <span className="flr">
                    <button className={(monthEarning === "earnings" && days === "Day") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.earnings?.Day?.datavalue, datarestored?.earnings?.Day?.labelsname); setDays("Day") }}>D</button>
                    <button className={(monthEarning === "earnings" && days === "Week") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.earnings?.Week?.datavalue, datarestored?.earnings?.Week?.labelsname); setDays("Week") }}>W</button>
                    <button className={(monthEarning === "earnings" && days === "Month") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.earnings?.Month?.datavalue, datarestored?.earnings?.Month?.labelsname); setDays("Month") }}>M</button>
                    <button className={(monthEarning === "earnings" && days === "Year") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.earnings?.Year?.datavalue, datarestored?.earnings?.Year?.labelsname); setDays("Year") }}>Y</button>
                    <button className={(monthEarning === "earnings" && days === "Max") ? "btncr true" : "btncr false"} onClick={() => { updateDataset(0, datarestored?.earnings?.Max?.datavalue, datarestored?.earnings?.Max?.labelsname); setDays("Max") }}>Max</button>
                </span>
            )

            }
            <div>
                <div className="chart-container mt-2">
                    <canvas ref={chartContainer} />
                </div>
            </div>
        </div>
    );
};

export default Chart;