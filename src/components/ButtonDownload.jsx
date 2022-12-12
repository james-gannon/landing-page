import React from "react";
import styles from "../styles/Global";

const ButtonDownload = ({ assetUrl1, assetUrl2, Link }) => {
  return (
    <div className={styles.btnDownload}>
      <img
        src={assetUrl1}
        alt="AppStore_icon"
        className={styles.apple}
        onClick={() => window.open(Link, "_blank")}
      />
      <img
        src={assetUrl2}
        alt="GooglePlay_icon"
        className={styles.google}
        onClick={() => window.open(Link, "_blank")}
      />
    </div>
  );
};

export default ButtonDownload;
