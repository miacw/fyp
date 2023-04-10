import React from "react";
import "../Pages/Folders.css";
import { FaFolderOpen } from "react-icons/fa";

const Folder = ({ name }) => {
  return (
    <div className="thumbnail">
      <FaFolderOpen
        size={150}
        style={{
          color: "#ffffff",
          padding: "16px 16px 4px 16px",
        }}
      />

      <button>{name}</button>
    </div>
  );
};

export default Folder;
