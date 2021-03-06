import { useState, useEffect } from "react";
import Head from "next/head";
import Select from "../components/Select";
import Charts from "../components/Charts";
import Cards from "../components/Cards";
import API from "../components/util/API";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [accounts, setAccounts] = useState([{}]);
  const [accountId, setAccountId] = useState("");
  const [accountStats, setAccountStats] = useState({});
  const [accountCostsHistory, setAccountCostsHistory] = useState([{}]);

  /**
   * On the first render, call the API
   * to get the list of accounts and
   * set the first one as default
   */
  useEffect(() => {
    API.getAccounts().then((data) => {
      setAccounts(data);
      setAccountId(data[0].id);
    });
  }, []);

  /**
   * Once accountId has a new value,
   * Fetches the account stats and
   * costs history
   */
  useEffect(() => {
    API.getAccountStats(accountId).then((data) => setAccountStats(data));
    API.getAccountCostsHistory(accountId).then((data) =>
      setAccountCostsHistory(data)
    );
  }, [accountId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Oraculi - Frontend Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <p>Select your account:</p>
          <Select accounts={accounts} setAccountId={setAccountId} />
        </nav>

        <Cards accountStats={accountStats} />
        <Charts accountCostsHistory={accountCostsHistory} />
      </main>
    </div>
  );
}
