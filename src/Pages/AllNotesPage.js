import React, { useState, useEffect } from "react";

import Note from "../Components/Note";

import Header from "../Components/Header";

import SkeletonPage from "../Components/SystemFeedback/SkeletonPage";
import LoadingSpinner from "../Components/SystemFeedback/LoadingSpinner";

import "./AllNotesPage.css";

function AllNotesPage({
  notes,
  layout,
  handleDeleteNote,
  handleEditNote,
  handleDialog,
  loadPattern,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading &&
        (loadPattern === "Spinner" ? <LoadingSpinner /> : <SkeletonPage />)}
      <div className={loading ? "hidden" : null}>
        <Header title="My Notes" />
        <div className={layout === "list" ? "Main" : "MainGrid"}>
          {notes.map((note) => {
            return (
              <Note
                note={note}
                layout={layout}
                id={note.id}
                title={note.title}
                date={note.date}
                text={note.text}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllNotesPage;
