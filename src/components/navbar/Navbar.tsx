import React from "react";
import "./navbar.scss";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>胖胖</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
