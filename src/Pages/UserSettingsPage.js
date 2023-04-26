import React, { useState, useEffect } from "react";
import "./UserSettingsPage.css";
import Header from "../Components/Header";
import Dropdown from "../Components/Dropdown";

const UserSettingsPage = ({
  handleDisplay,
  handleNav,
  handleDialogType,
  handleSearchPattern,
  handleLoadPattern,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="settingsPage">
      <Header title="Settings" />
      <div className="controls">
        <Dropdown
          menuTitle={"Display of Information"}
          menuOptions={[
            {
              option: "Grid",
              functionParam: "grid",
            },
            {
              option: "List",
              functionParam: "list",
            },
          ]}
          handleFunction={handleDisplay}
        />
        <Dropdown
          menuTitle={"Navigation"}
          menuOptions={[
            {
              option: "Sidedrawer Menu",
              functionParam: 0,
            },
            {
              option: "Tab Menu",
              functionParam: 1,
            },
            {
              option: "Springboard Menu",
              functionParam: 2,
            },
          ]}
          handleFunction={handleNav}
        />
        <Dropdown
          menuTitle={"Confirmation"}
          menuOptions={[
            {
              option: "Modal",
              functionParam: "modal",
            },
            {
              option: "Toast",
              functionParam: "toast",
            },
          ]}
          handleFunction={handleDialogType}
        />
        <Dropdown
          menuTitle={"Search Pattern"}
          menuOptions={[
            {
              option: "Dynamic",
              functionParam: "Dynamic",
            },
            {
              option: "Scoped",
              functionParam: "Scoped",
            },
          ]}
          handleFunction={handleSearchPattern}
        />
        <Dropdown
          menuTitle={"Loading Feedback"}
          menuOptions={[
            {
              option: "Spinner",
              functionParam: "Spinner",
            },
            {
              option: "Skeleton Page",
              functionParam: "Skeleton",
            },
          ]}
          handleFunction={handleLoadPattern}
        />
      </div>
    </div>
  );
};

export default UserSettingsPage;
