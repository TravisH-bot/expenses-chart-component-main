import { spendingData } from "../data";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const MainContainer = () => {
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    options: {
      plugins: {
        tooltip: {
          displayColors: false,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="main-container">
      <h2>Spending - Last 7 days</h2>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
      mon tue wed thu fri sat sun Total this month $478.33 +2.4% from last month
    </section>
  );
};

export default MainContainer;
