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
    labels: spendingData.map((data) => data.day),
    datasets: [
      {
        data: spendingData.map((data) => data.amount),
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    events: ["click", "mousemove"],
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: "hsl(25, 47%, 15%)",
        xAlign: "center",
        yAlign: "bottom",
        callbacks: {
          title: function () {
            return null;
          },
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
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
      <div className="bar-graph">
        <Bar data={data} options={options}></Bar>
      </div>
      <div className="total">
        <div className="month-total">
          <h5>Total this month</h5>
          <h1>$478.33</h1>
        </div>
        <div className="month-prior">
          <h5 className="percent">+2.4%</h5>
          <h5 className="last-month">from last month</h5>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
