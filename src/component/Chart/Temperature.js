import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
import "./Chart.css";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Charttemp() {
  const [Chart, setChart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://realnodedjshv.up.railway.app/data/engtmp"
      );
      console.log(data);
      setChart({
        labels: data.slice(0, 100).map((item) => item.Time),
        datasets: [
          {
            label: "Degree Celcius",
            data: data.slice(0, 100).map((item) => item.Temperature),
            fill: true,
            borderColor: "rgb(95, 174, 242)",
            backgroundColor: "rgb(95, 174, 242,0.3)",
          },
        ],
      });
    };
    fetchData();
  }, []);
  return (
    <div className="chart">
      <div className="chart1">
        {Chart && Chart?.datasets && (
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Engine Temperature",
                },
              },
            }}
            data={Chart}
          />
        )}
      </div>
    </div>
  );
}

export default Charttemp;
