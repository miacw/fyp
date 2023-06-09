import React, { useState, useRef } from "react";
import "./NoteList.css";
import ElementMarker from "./ElementMarker";

import { RiStickyNoteFill } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { render } from "@testing-library/react";

function Note({
  note,
  layout,
  id,
  title,
  date,
  text,
  handleDeleteNote,
  handleEditNote,
}) {
  const noteTitle = useRef();
  noteTitle.current = title;
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [titleText, setTitleText] = useState(title);
  const [textText, setTextText] = useState(text);

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
            type="text"
            value={title}
            handleChange={(e) => setTitleText(e.target.value)}
            handleClick={() => setShowTitleInput(true)}
            showInput={showTitleInput}
            handleBlur={() => {
              handleEditNote(note, id, "title", titleText);
              setShowTitleInput(false);
            }}
          />
        </h1>

        <h2>{date}</h2>

        <p>
          <ElementMarker
            type="textarea"
            value={text}
            handleChange={(e) => setTextText(e.target.value)}
            handleClick={() => setShowTextInput(true)}
            showInput={showTextInput}
            handleBlur={() => {
              handleEditNote(note, id, "text", textText);
              setShowTextInput(false);
            }}
          />
        </p>

        {/* </div> */}
      </div>
      <div className={layout === "list" ? "actionsList" : "actionsGrid"}>
        <button>{layout === "list" ? ">" : "See more"}</button>

        <AiTwotoneDelete
          size={32}
          onClick={() => {
            handleDeleteNote(note, id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
