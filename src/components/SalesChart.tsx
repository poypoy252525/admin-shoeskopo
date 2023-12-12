import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useSalesOfTheWeek from "../hooks/useSalesOfTheWeek";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
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

  return <Line title="Sales chart" data={data} options={options} />;
};

export default SalesChart;
