import React from "react";
import styles from "../styles/Global.js";
import assets from "../assets/assets";
import ButtonDownload from "./ButtonDownload";
import YouTube from "react-youtube";

const SectionWrapperVideo = ({
  title,
  description,
  showBtn,
  banner,
  reverse,
}) => {
  // const video = React.useRef(null);
  // const [status, setStatus] = React.useState({});
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv}
         ${reverse ? "fadeRightMini" : "fadeLeftMini"}
         ${reverse ? styles.textRight : styles.textLeft}
         `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <ButtonDownload
              assetUrl={assets.expo}
              Link="CashQuest app deployment"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <YouTube videoId="Zqdc2EisD30" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapperVideo;
