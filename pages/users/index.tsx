import Sidebar from "../../components/SideBar";
import Navbar from "../../components/NavBar";
import Datatable from "../../components/Datatable";
import styles from "./List.module.scss";
const Users = () => {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles.listContainer}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Users;
