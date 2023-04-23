import Search from "../Components/Search";
import ScopedSearch from "../Components/ScopedSearch";
import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import Header from "../Components/Header";
import Note from "../Components/Note";
import SkeletonPage from "../Components/SystemFeedback/SkeletonPage";
import LoadingSpinner from "../Components/SystemFeedback/LoadingSpinner";

function SearchPage({
  notes,
  layout,
  handleSearchNote,
  handleDeleteNote,
  handleScopedSearch,
  searchPattern,
  loadPattern,
  handleSearchResult,
  handleEditNote,
}) {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  return (
    <>
      {loading &&
        (loadPattern === "Spinner" ? <LoadingSpinner /> : <SkeletonPage />)}
      <div className={loading ? "hidden" : null}>
        <Header title="Search" />
        <div className="holder">
          {searchPattern === "Dynamic" ? (
            <Search
              handleSearchNote={handleSearchNote}
              handleScopedSearch={handleScopedSearch}
              handleLoad={handleLoad}
              handleSearchResult={handleSearchResult}
            />
          ) : (
            <ScopedSearch
              handleScopedSearch={handleScopedSearch}
              handleSearchNote={handleSearchNote}
              handleLoad={handleLoad}
              handleSearchResult={handleSearchResult}
            />
          )}
        </div>
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
    </>
  );
}

export default SearchPage;
