import React from "react";
import styles from "../styles/Global.js";
import assets from "../assets/assets";
import ButtonDownload from "./ButtonDownload";
// import Map from "./Map.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
  header,
}) => {
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
              assetUrl1={assets.AppStore}
              assetUrl2={assets.GooglePlayCrop}
              Link="CashQuest app deployment"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${reverse ? "fadeLeftMini" : "fadeRightMini"}
            ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
