import React, { useState } from "react";
import "./NoteList.css";
import ElementMarker from "./ElementMarker";

import { RiStickyNoteFill } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";

function Note({ layout, id, title, date, text, handleDeleteNote, dialog }) {
  const [showInput, setShowInput] = useState(false);
  const [titleText, setTitleText] = useState(title);
  return (
    <div className={layout === "list" ? "ContainerList" : "ContainerGrid"}>
      <div className="NoteIcon">
        <span>
          <RiStickyNoteFill
            size={56}
            className={layout === "list" ? null : "reactIconHide"}
          />
        </span>
      </div>

      <div className={layout === "list" ? "InfoList" : "InfoGrid"}>
        <h1>
          <ElementMarker
            value={titleText}
            handleChange={(e) => setTitleText(e.target.value)}
            handleDoubleClick={() => setShowInput(true)}
            showInput={showInput}
          />
        </h1>
        <h2>{date}</h2>
        {/* <div
          style={{
            display: "grid",
            alignContent: "space-between",
          }}
        > */}
        {/* <span>
          <AiTwotoneDelete
            size={28}
            onClick={() => handleDeleteNote(id)}
            className="gridDelete"
          />
        </span> */}
        <p>{text}</p>

        {/* </div> */}
      </div>
      <div className={layout === "list" ? "actionsList" : "actionsGrid"}>
        <button>{layout === "list" ? ">" : "See more"}</button>

        <AiTwotoneDelete
          size={32}
          onClick={() => {
            handleDeleteNote(id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
