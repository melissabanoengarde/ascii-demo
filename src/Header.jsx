import React from "react";
import { motion as m } from "framer-motion";

const Header = () => {
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
          <p>You gravitate to that which you secretly love most.</p>
          <p>You meet in life the exact reproduction of your own thoughts.</p>
          <p>There is no chance, coincidence or accident.</p>
        </div>
        <div className="container_children two">
          <p>
            In a world ruled by law and divine order You rise as high as your
            dominant aspiration.
          </p>
          <p>
            You descend to the level of your lowest concept of your self Free
            your mind and your ass will follow
          </p>
          <p>
            The infinite intelligence within you knows the answers. Its nature
            is to respond to your thoughts. Be careful of the thought-seeds you
            plant in the garden of your mind For seeds grow after their kind.
          </p>
        </div>
        <div className="container__children three">
          <p>
            Every thought felt as true or allowed to be accepted as true by your
            conscious mind takes roots in your subconscious, blossoms sooner or
            later into an act and bears its own fruit.
            <br></br>
            <br></br>
            Bring forth good fruit. Good thoughts.Bullshit thoughts rot your
            meat. Think right, and you can fly The kingdom of heaven is within.
          </p>
        </div>
      </div>
    </m.header>
  );
};

export default Header;