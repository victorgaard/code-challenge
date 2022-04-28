import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import styles from "../styles/Charts.module.css";

function Charts({ accountCostsHistory }) {
  Chart.register(ChartDataLabels);

  return (
    <div className={styles.container}>
      <BarChart accountCostsHistory={accountCostsHistory} />
      <PieChart accountCostsHistory={accountCostsHistory} />
    </div>
  );
}

export default Charts;
