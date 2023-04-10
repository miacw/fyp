import React, { useState } from "react";
import { BurgerNavData } from "./BurgerNavData";
import { ImHome } from "react-icons/im";
import { BiSearchAlt2, BiMessageDetail } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import "./BurgerNav.css";
import "./Tab.css";
import { IconContext } from "react-icons";
import TabNavItem from "./TabNavItem";

import TabNavContent from "./TabNavContent";
import AllNotesPage from "../../Pages/AllNotesPage";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="Tabs">
      <IconContext.Provider
        value={{
          color: "#ffffff",
          size: "25",
        }}
      >
        <ul className="tab-nav">
          {BurgerNavData.map((item, key) => {
            return (
              <TabNavItem
                icon={item.icon}
                path={item.path}
                title={item.title}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </ul>
      </IconContext.Provider>
      <div className="outlet"></div>
    </div>
  );
};

export default Tab;
