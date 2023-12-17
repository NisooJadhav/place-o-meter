import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function Exp() {
  const [data, setData] = useState([]);
  const combinedChartRef = useRef(null);
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

    const workexPlacements = { Yes: 0, No: 0 };

    data.forEach((item) => {
      const workex = item.workex;
      const status = item.status;

      if (status.toLowerCase() === "placed") {
        workexPlacements[workex]++;
      }
    });

    const labels = Object.keys(workexPlacements);
    const placementRates = Object.values(workexPlacements).map((count) => {
      return ((count / data.length) * 100).toFixed(2);
    });

    const ctx = combinedChartRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "% Placement Rate",
            data: placementRates,
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }, [data]);

  return (
    <>
      <div>
        <hr />
        <h3>Placement Rate Based on Work Experience</h3>
        <br />
        <canvas
          ref={combinedChartRef}
          style={{ width: "400px", height: "400px" }}
          id="combinedChart"
        ></canvas>
      </div>
    </>
  );
}

export default Exp;