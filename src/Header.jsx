import React from "react";
import para from "../para";
import { motion as m } from "framer-motion";

const Header = () => {
  // console.log(para[0].map((x) => x));
  return (
    <m.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
    >
      <div className="header__container">
        <div className="container__children zero">
          <p>ascii demo</p>
          <p className="attribution">
            By{" "}
            <a href="https://github.com/melissabanoengarde" target="_blank">
              Melissa Banoen-Garde
            </a>
          </p>
        </div>
        <div className="container__children one">
          {para[0].map((x) => (
            <p>{x}</p>
          ))}
        </div>
        <div className="container_children two">
          {para[1].map((x) => (
            <p>{x}</p>
          ))}
        </div>
        <div className="container__children three">
          {para[2].map((x) => (
            <p>{x}</p>
          ))}
        </div>
      </div>
    </m.header>
  );
};

export default Header;
