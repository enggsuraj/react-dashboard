import Head from "next/head";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
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
      </div>
    </div>
  );
}
