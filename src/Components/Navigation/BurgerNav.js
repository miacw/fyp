import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./BurgerNav.css";
import { BurgerNavData } from "./BurgerNavData";

function BurgerNav(props) {
  const [sidebar, setSideBar] = useState(false); // sidebar initially not showing
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <div className="Nav">
      <Link to="#" className="menu-bars">
        <span>
          <RxHamburgerMenu
            size={48}
            style={{
              color: "#000000",
            }}
            onClick={showSideBar}
          />
        </span>
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose
                size={48}
                style={{
                  color: "#000000",
                }}
                className="menu-exit-icon"
                onClick={showSideBar}
              />
            </Link>
          </li>
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
        </ul>
      </nav>
      {/* <div className="Header">
        <h1>props.title</h1>
      </div> */}
    </div>
  );
}

export default BurgerNav;
