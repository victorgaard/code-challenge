import Card from "./Card";
import styles from "../styles/Cards.module.css";

function Cards({ accountStats }) {
  return (
    <div className={styles.container}>
      <Card type="bill" accountStats={accountStats} />
      <Card type="servers" accountStats={accountStats} />
      <Card type="regions" accountStats={accountStats} />
      <Card type="alarms" accountStats={accountStats} />
    </div>
  );
}

export default Cards;
