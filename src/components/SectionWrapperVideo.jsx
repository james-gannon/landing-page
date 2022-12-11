import React from "react";
import styles from "../styles/Global.js";
import assets from "../assets/assets";
import Button from "./Button";

const SectionWrapperVideo = ({
  title,
  description,
  showBtn,
  banner,
  reverse,
}) => {
  const [status, setStatus] = React.useState({});
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
            <Button assetUrl={assets.expo} Link="CashQuest app deployment" />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <video
            src="https://www.loom.com/embed/4176d59d32044d619a07f0d43b1ccbb6"
            usenativecontrols={true.toString()}
            resizemode="contain"
            islooping={true.toString()}
            onPlaybackStatusUpdate={setStatus}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapperVideo;
