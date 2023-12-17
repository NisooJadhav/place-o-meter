import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Exp from "./Exp";
import Gender from "./Gender";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Analytics = () => {
  const [data, setData] = useState([]);
  const combinedChartRef = useRef(null);
  const chartInstance = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const content = document.getElementById("pdf-content");
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      doc.save("download.pdf");
    });
  };

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

    const degreePlacement = {};
    const degreeTotalStudents = {};

    data.forEach((item) => {
      const degree = item.degree_t;
      const status = item.status;

      if (degreeTotalStudents[degree]) {
        degreeTotalStudents[degree]++;
      } else {
        degreeTotalStudents[degree] = 1;
      }

      if (status.toLowerCase() === "placed") {
        if (degreePlacement[degree]) {
          degreePlacement[degree]++;
        } else {
          degreePlacement[degree] = 1;
        }
      }
    });

    const labels = Object.keys(degreeTotalStudents);
    const totalStudents = Object.values(degreeTotalStudents);
    const totalPlaced = Object.values(degreePlacement);

    const ctx = combinedChartRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Total Students",
            data: totalStudents,
            backgroundColor: "red",
          },
          {
            label: "Total Placed Students",
            data: totalPlaced,
            backgroundColor: "green",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }, [data]);

  return (
    <div>
      <div className="container" id="pdf-content">
        <center>
          <br />
          <h2>Analytics Page</h2>
          <br />
          <hr />
          <h3>Placement Rate based on Stream</h3>
          <br />
          <canvas
            ref={combinedChartRef}
            style={{ width: "400px", height: "400px" }}
            id="combinedChart"
          ></canvas>
          <br />
          <Exp />
          <br />
          <Gender />
          <br />
          <button onClick={downloadPDF}>Download PDF Report</button>
          <br />
          <br />
          <br />
          <br />
        </center>
      </div>
    </div>
  );
};

export default Analytics;
