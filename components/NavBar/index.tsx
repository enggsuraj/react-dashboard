import styles from "./NavBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder="search" />
          <SearchIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <LanguageIcon />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon />
          </div>{" "}
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon />
          </div>{" "}
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlinedIcon />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon className="icon" />
          </div>
          <div className={styles.item}>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
