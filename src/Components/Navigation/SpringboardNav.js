import React from "react";
import { BurgerNavData } from "./BurgerNavData";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./SpringboardNav.css";

const SpringboardNav = () => {
  return (
    <IconContext.Provider
      value={{
        color: "#ffffff",
        size: "36",
      }}
    >
      <div className="springboardContainer">
        <ul className="springboardNav">
          {BurgerNavData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text">
            <Link to="#">
              <AiOutlineClose />
              <span>Test</span>
            </Link>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default SpringboardNav;
