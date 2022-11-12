import Head from "next/head";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Widgets from "../components/Widgets";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React-Dashboard</title>
      </Head>

      <SideBar />
      <div className={styles.homeContainer}>
        <NavBar />

        <div className={styles.widgets}>
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
}
