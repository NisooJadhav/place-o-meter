import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function CustomChart() {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allstudents")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const genderCount = {
      M: 0,
      F: 0,
    };

    data.forEach((item) => {
      const gender = item.gender;

      if (gender in genderCount) {
        genderCount[gender]++;
      }
    });

    const labels = Object.keys(genderCount);
    const genderDistribution = Object.values(genderCount);

    const ctx = chartRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Gender Distribution",
            data: genderDistribution,
            backgroundColor: ["blue", "pink"], // Add colors as needed
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: false,
      },
    });
  }, [data]);

  return (
    <>
      <div>
        <hr />
        <h3>Gender Distribution Chart</h3>
        <br />
        <canvas
          ref={chartRef}
          style={{ width: "400px", height: "400px" }}
          id="customChart"
        ></canvas>
      </div>
    </>
  );
}

export default CustomChart;
