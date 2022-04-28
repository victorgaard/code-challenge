import Image from "next/image";
import styles from "../styles/Card.module.css";

function Card({ accountStats, type }) {
  const handleType = (param) => {
    if (param === "alarms") {
      const img = "/alarms.svg";
      const value = accountStats.alarms;
      return [img, value];
    }
    if (param === "bill") {
      const img = "/bill.svg";
      const value = `$${accountStats.bill}`;
      return [img, value];
    }
    if (param === "regions") {
      const img = "/regions.svg";
      const value = accountStats.regions;
      return [img, value];
    }
    if (param === "servers") {
      const img = "/servers.svg";
      const value = accountStats.servers;
      return [img, value];
    }
    return false;
  };

  const formatter = (param) => param.charAt(0).toUpperCase() + param.slice(1);

  return (
    <div className={styles.card}>
      <Image src={handleType(type)[0]} width={50} height={50} />
      <div className={styles.wrapper}>
        <p className={styles.title}>{formatter(type)}</p>
        {accountStats ? (
          <p className={styles.value}>{handleType(type)[1]}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
