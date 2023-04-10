import React from "react";

const TabNavContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
};

export default TabNavContent;
