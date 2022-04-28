import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dateFormatter from "./util/dateFormatter";
import styles from "../styles/Chart.module.css";

function BarChart({ accountCostsHistory }) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (accountCostsHistory.length > 1) {
      const period = accountCostsHistory.slice(6, 12);
      setChartData({
        labels: period.map((month) => dateFormatter(month.date)),
        datasets: [
          {
            label: period[0].groups[0].key,
            borderRadius: 30,
            backgroundColor: "blue",
            barThickness: 15,
            data: period.map((month) => month.groups[0].amount)
          },
          {
            label: period[0].groups[1].key,
            borderRadius: 30,
            backgroundColor: "red",
            barThickness: 15,
            data: period.map((month) => month.groups[1].amount)
          },
          {
            label: period[0].groups[2].key,
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
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index"
    },
    plugins: {
      datalabels: {
        display: false
      },
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
        },
        callbacks: {
          label(label) {
            return `${label.dataset.label}: $${label.formattedValue}`;
          }
        }
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
    <div className={`${styles.card} ${styles.barChart}`}>
      <p>Last 6 months spend by service</p>
      {!!chartData && <Bar data={chartData} options={options} />}
    </div>
  );
}

export default BarChart;
