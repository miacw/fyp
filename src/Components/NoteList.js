import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          date={note.date}
          text={note.text}
        />
      ))}
    </div>
  );
};

export default NoteList;
