import React from "react";
import para from "../para";
import { motion as m } from "framer-motion";

const Header = ({ clicked }) => {
  // console.log(para[0].map((x) => x));
  return (
    <m.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
    >
      <div
        className="header__container"
        style={!clicked ? { color: "gray" } : { color: "red" }}
      >
        <div className="container__children zero">
          <p>ascii demo</p>
          <p className="attribution">
            By{" "}
            <a href="https://github.com/melissabanoengarde" target="_blank">
              Melissa Banoen-Garde
            </a>
          </p>
          <br></br>

          <p style={{ background: "#EEFAF3", display: "inline" }}>
            click or scroll
          </p>
        </div>
        <div className="container__children one">
          {!clicked
            ? para[0].map((x, index) => <p key={index}>{x}</p>)
            : para[3].map((x, index) => <p key={index}>{x}</p>)}
        </div>
        <div className="container_children two">
          {!clicked
            ? para[1].map((x, index) => <p key={index}>{x}</p>)
            : para[4].map((x, index) => <p key={index}>{x}</p>)}
        </div>
        <div className="container__children three">
          {!clicked
            ? para[2].map((x, index) => <p key={index}>{x}</p>)
            : para[5].map((x, index) => <p key={index}>{x}</p>)}
        </div>
      </div>
    </m.header>
  );
};

export default Header;
