import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

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
            borderRadius: 30,
            backgroundColor: ["blue", "red", "green"],
            barThickness: 15,
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
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            family: "Manrope"
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 18
            }
          }
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
    <div style={{ width: 350 }}>
      <div>
        <h1>Spend by service</h1>
      </div>
      {!!chartData && <Pie data={chartData} options={options} />}
    </div>
  );
}

export default PieChart;
