import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import styles from "./New.module.scss";

const New = ({ title }) => {
  const [file, setFile]: any = useState("");

  const inputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: 3,
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: 4,
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
    },
    {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <Navbar />
        <div className={styles.top}>
          <h1>{title}</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles.formInput}>
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className={styles.formInput} key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
