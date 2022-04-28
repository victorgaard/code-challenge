import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import styles from "../styles/Chart.module.css";

function PieChart({ accountCostsHistory }) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (accountCostsHistory.length > 1) {
      const period = accountCostsHistory;
      setChartData({
        labels: [
          period[0].groups[0].key,
          period[0].groups[1].key,
          period[0].groups[2].key
        ],
        datasets: [
          {
            borderRadius: 20,
            backgroundColor: ["blue", "red", "green"],
            data: [
              period.reduce(
                (previous, current) => previous + current.groups[0].amount,
                0
              ),
              period.reduce(
                (previous, current) => previous + current.groups[1].amount,
                0
              ),
              period.reduce(
                (previous, current) => previous + current.groups[2].amount,
                0
              )
            ]
          }
        ]
      });
    }
  }, [accountCostsHistory]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          const dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
            return sum;
          });
          const percentage = `${((value * 100) / sum).toFixed(1)}%`;

          return `${ctx.chart.data.labels[ctx.dataIndex]}\n${percentage}`;
        },
        textAlign: "center",
        color: "white",
        font: {
          family: "Manrope",
          weight: "bold",
          size: 14
        }
      },
      tooltip: {
        padding: 12,
        bodyFont: {
          family: "Manrope"
        },
        callbacks: {
          label(label) {
            return `${label.label}: $${label.formattedValue}`;
          }
        }
      }
    }
  };

  return (
    <div className={`${styles.card} ${styles.pieChart}`}>
      <p>Spend by service</p>
      {!!chartData && <Pie data={chartData} options={options} />}
    </div>
  );
}

export default PieChart;
