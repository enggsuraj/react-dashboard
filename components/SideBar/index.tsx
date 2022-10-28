import NextImage from "next/Image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import logo from "../../assets/dashboard.png";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <NextImage src={logo} height="50" width="50" alt="logo" />
        {/* <h4>Admin Dashboard</h4> */}
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LIST</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Users</span>
          </li>{" "}
          <li>
            <Inventory2OutlinedIcon className={styles.icon} />
            <span>Products</span>
          </li>{" "}
          <li>
            <ShoppingCartOutlinedIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className={styles.icon} />
            <span>Delivery</span>
          </li>{" "}
          <p className={styles.title}>USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className={styles.icon} />
            <span>Stats</span>
          </li>{" "}
          <li>
            <NotificationsActiveOutlinedIcon className={styles.icon} />
            <span>Notifications</span>
          </li>{" "}
          <li>
            <SettingsOutlinedIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <PermIdentityOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>{" "}
          <li>
            <CodeOutlinedIcon className={styles.icon} />
            <span>Session</span>
          </li>
          <li>
            <LogoutOutlinedIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
