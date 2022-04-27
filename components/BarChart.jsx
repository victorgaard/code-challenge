import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dateFormatter from "./util/dateFormatter";

function BarChart({ accountCostsHistory }) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (accountCostsHistory.length > 1) {
      const period = accountCostsHistory.slice(6, 12);
      setChartData({
        labels: period.map((month) => dateFormatter(month.date)),
        datasets: [
          {
            label: "Compute",
            borderRadius: 30,
            backgroundColor: "blue",
            barThickness: 15,
            data: period.map((month) => month.groups[0].amount)
          },
          {
            label: "Storage",
            borderRadius: 30,
            backgroundColor: "red",
            barThickness: 15,
            data: period.map((month) => month.groups[1].amount)
          },
          {
            label: "Network",
            borderRadius: 30,
            backgroundColor: "green",
            barThickness: 15,
            data: period.map((month) => month.groups[2].amount)
          }
        ]
      });
    }
  }, [accountCostsHistory]);

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            family: "Manrope"
          }
        }
      },
      tooltip: {
        padding: 12,
        bodyFont: {
          family: "Manrope"
        },
        titleFont: {
          family: "Manrope"
        }
      }
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        cetagoryPercentage: 1
      }
    },
    scales: {
      xAxis: {
        display: true,
        grid: { lineWidth: 0, borderWidth: 0 },
        ticks: {
          font: {
            family: "Manrope"
          }
        }
      },
      yAxis: {
        display: true,
        grid: { borderWidth: 0, color: "#e8ecf5" },
        ticks: {
          font: {
            family: "Manrope"
          },
          callback(value) {
            return `$${value}`;
          }
        }
      }
    }
  };

  return (
    <div>
      <div>
        <h1>Last 6 months spend by service</h1>
      </div>
      {!!chartData && (
        <Bar data={chartData} options={options} width={600} height={400} />
      )}
    </div>
  );
}

export default BarChart;
