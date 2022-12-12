import React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { Icon } from "react-native-elements";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold leading-tight">Get in Touch</h3>
          <p className="my-4 text-gray-500">
            If you have any questions or need support, please email us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-white underline"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-right">
          <h3 className="text-3xl font-bold leading-tight">Follow Us</h3>
          <ul className="list-reset flex justify-center flex-wrap mt-4">
            <li>
              <a href="#" className="text-white hover:text-gray-500">
                <span className="inline-block mr-2">
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M17.3 5.3a6.5 6.5 0 0 1-1.3 1.6c-.3.3-.7.5-1.1.8-.4.2-.8.4-1.2.5-.4.1-.9.3-1.4.3-.
                5 0-1-.1-1.4-.3-.4-.1-.8-.3-1.2-.5-.4-.2-.8-.4-1.1-.8a6.5 6.5 0 0 1-1.3-1.6c-.3-.4-.5-.8-.8-1.
                1a6.2 6.2 0 0 1-.5-1.2c-.1-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4.2-.4.3-.8.5-1.2.2-.4.5-.8.8-1.1.4-.
                3.8-.5.a6.5 6.5 0 0 1-1.3 1.6c-.3.3-.7.5-1.1.8-.4.2-.8.4-1.2.5-.4.1-.9.3-1.4.3-.5 0-1-.1-1.4-.3
                -.4-.1-.8-.3-1.2-.5-.4-.2-.8-.4-1.1-.8a6.5 6.5 0 0 1-1.3-1.6c-.3-.4-.5-.8-.8-1.1a6.2 6.2 0 0 1-
                .5-1.2c-.1-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4.2-.4.3-.8.5-1.2.2-.4.5-.8.8-1.1.4-.3.8-.5 1.1-.8.4-.
                2.8-.4 1.2-.5.4-.1.9-.3 1.4-.3.5 0 1 .1 1.4.3.4.1.8.3 1.2.5.4.2.8.4 1.1.8.3.3.7.5 1.3 1.6.3.4.5
                .8.8 1.1.2"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
