import React, { useState } from "react";
import { Link } from "react-router-dom";

const TabNavItem = ({ title, icon, path, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(title);
  };

  return (
    <li onClick={handleClick} className={activeTab === title ? "active" : ""}>
      <Link to={path}>{icon}</Link>
    </li>
  );
};

export default TabNavItem;
