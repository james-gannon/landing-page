import React from "react";
import styles from "../styles/Global";
// import Badge from "react-store-badge";

const ButtonDownload = ({ assetUrl1, assetUrl2, Link }) => {
  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center lg:flex-row">
      <img
        src={assetUrl1}
        alt="App Store badge"
        className="md:inline-block my-3 h-12 float-left minmd:w-11/12 minmd:h-11/12 object-contain cursor-pointer"
        onClick={() => window.open(Link, "_blank")}
      />
      <img
        src={assetUrl2}
        alt="Google Play badge"
        className="md:inline-block my-3 mx-4 h-12 float-left minmd:w-11/12 minmd:h-11/12 object-contain cursor-pointer"
        onClick={() => window.open(Link, "_blank")}
      />
    </div>
  );
};

{
  /*<div className="md:flex md:justify-center md:flex-col md:items-center lg:flex-row">
      <Badge
        className="md:inline-block my-4 mx-2"
        name="Cheerswipe"
        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
      />
  </div>*/
}

{
  /*<div className={styles.btnDownload}>
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
</div>*/
}

export default ButtonDownload;
