import React from "react";
import styles from "../styles/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 flex justify-around">
      <div className="w-1/2">
        <h4 className="font-bold text-xl mb-2">Contact</h4>
        <p className="text-sm text-gray mt-4" style={{ maxWidth: "50%" }}>
          If you have any questions or need assistance, please contact our
          support team at{" "}
          <a href="mailto:info@cashquest.app" className="text-green-500">
            info@cashquest.app
          </a>
        </p>
      </div>

      <div>
        <h4 className="font-bold text-xl mb-2">Follow us</h4>
        <ul className="flex flex-row mt-4">
          <li className="mr-5">
            <a
              href="https://www.tiktok.com/@cashquestapp"
              className="text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon className="fa-2x" icon={faTiktok} />
            </a>
          </li>
          <li className="mr-5">
            <a
              href="https://twitter.com/CashQuestApp"
              className="text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/treasurhuntapp/"
              className="text-green-500 hover:text-green-600"
            >
              <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
