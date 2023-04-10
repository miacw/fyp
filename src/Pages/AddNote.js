import React, { useState } from "react";
import Header from "../Components/Header";
import { nanoid } from "nanoid";
import "./AddNote.css";

const AddNote = ({ handleAddNote, handleDialog }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleTextChange = (event) => {
    // value of text area
    setNoteText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = () => {
    // checks if note is empty
    if (noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteText("");
      setNoteTitle("");
      handleDialog("Note has been saved ", "toast", true);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header title="Compose" />
      <div className="card">
        <div className="form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={noteTitle}
          ></input>

          <textarea
            name="note-text"
            onChange={handleTextChange}
            value={noteText}
          ></textarea>
          <button onClick={handleSaveClick}>Save Note</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
