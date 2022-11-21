import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      min: 0,
      max: 100,
      padding: "10px",
      grid: {
        display: false,
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        generateLabels: (chart) => {
          return chart.data.labels.map(
            (label, index) => (
              {
                text: label,
                fillStyle: chart.data.datasets[0].backgroundColor[index],
                strokeStyle: chart.data.datasets[0].backgroundColor[index],
              }
            )
          )
        }
      },
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Activity Performance',
    },

  },
};

const labels = ['On Track', 'Delay', 'Critical', 'Not Accepted'];

export const data = {
  labels: labels,
  datasets: [
    {
      data: [90, 20, 20, 30],
      backgroundColor: ["#629FFA", "#FFAF66", "#FF6969", "#FCFF69"],
      borderRadius: 5,
      barThickness: 61,
      borderColor: ["#629FFA", "#FFAF66", "#FF6969", "#FCFF69"]
    }],
}
let barValues = data.datasets[0].data
let maxBar = Math.max(...barValues)
let valueIndex = barValues.indexOf(maxBar)
const Activitystatus = labels[valueIndex]

export default function PerformanceBar() {
  return <Bar options={options} data={data} />
}
export { Activitystatus }

