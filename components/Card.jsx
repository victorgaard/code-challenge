function Card({ accountStats, type, title }) {
  const handleType = (param) => {
    if (param === "alarms") return accountStats.alarms;
    if (param === "bill") return accountStats.bill;
    if (param === "regions") return accountStats.regions;
    if (param === "servers") return accountStats.servers;
    return false;
  };

  return (
    <div>
      <h1>{title}</h1>
      {accountStats ? <p>{handleType(type)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Card;
