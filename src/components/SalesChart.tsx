import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useSalesOfTheWeek from "../hooks/useSalesOfTheWeek";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  SubTitle
);

const SalesChart = () => {
  const { data: salesOfTheWeek } = useSalesOfTheWeek();
  console.log(salesOfTheWeek);

  const data = {
    datasets: [
      {
        label: "Number of sale",
        data: salesOfTheWeek,
        borderColor: "gray",
        tension: 0,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Weekly sales",
        font: {
          size: 24,
        },
      },
      subtitle: {
        display: true,
        text: "Last 7 days",
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesChart;
