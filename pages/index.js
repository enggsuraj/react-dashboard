import Head from "next/head";
import SideBar from "../components/SideBar";
import MainContainer from "../components/MainContainer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React-Dashboard</title>
      </Head>

      <SideBar />
      <MainContainer />
    </div>
  );
}
