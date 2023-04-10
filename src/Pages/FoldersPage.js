import React from "react";
import "./Folders.css";
import Header from "../Components/Header";
import Folder from "../Components/Folder";

function Folders() {
  return (
    <div className="main">
      <Header title="Folders" />
      <div className="folders">
        <Folder name="Hobbies" />
        <Folder name="To Do" />
        <Folder name="Coursework" />
        <Folder name="Poems" />
      </div>
    </div>
  );
}

export default Folders;
