import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import AllNotesPage from "./Pages/AllNotesPage";
import BurgerNav from "./Components/Navigation/BurgerNav";
import Tab from "./Components/Navigation/Tab";
import SpringboardNav from "./Components/Navigation/SpringboardNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FoldersPage from "./Pages/FoldersPage";
import SearchPage from "./Pages/SearchPage";
import AddNote from "./Pages/AddNote";
import UserSettingsPage from "./Pages/UserSettingsPage";

import ConfirmModal from "./Components/SystemFeedback/ConfirmModal";
import ConfirmToast from "./Components/SystemFeedback/ConfirmToast";

function App() {
  const [display, setDisplay] = useState("list");

  const handleDisplay = (display) => {
    setDisplay(display);
  };

  const [nav, setNav] = useState(<BurgerNav />);

  const handleNav = (id) => {
    switch (id) {
      case 0:
        return setNav(<BurgerNav />);
      case 1:
        return setNav(<Tab />);
      case 2:
        return setNav(<SpringboardNav />);
      default:
        return setNav(<BurgerNav />);
    }
  };

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Rhyme",
      date: "16/03/2023",
      text: "Here is an example of a riddle. ",
    },
    {
      id: nanoid(),
      title: "Hobbies",
      date: "03/04/2023",
      text: "trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: nanoid(),
      title: "To Do",
      date: "22/01/2023",
      text: "Lorem ipsu sed do eiusmod tempor ina aliqua. Ut eniquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  const [searchPattern, setSearchPattern] = useState("Dynamic");
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("empty");
  const [scopedSearch, setScopedSearch] = useState("title");
  const handleScopedSearch = (selection) => {
    setScopedSearch(selection);
  };

  const [loadPattern, setLoadPattern] = useState("Spinner");

  const addNote = (title, text) => {
    console.log(title + " " + text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      date: date.toLocaleDateString(),
      text: text,
    };
    // creates new array instead of updating old array
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const idNoteRef = useRef();

  const deleteNote = (id) => {
    idNoteRef.current = id;
    if (dialogType === "modal") {
      handleDialog("Delete this note?", "modal", true);
    } else {
      const newNotes = notes.filter((note) => note.id !== idNoteRef.current);
      setNotes(newNotes);
      handleDialog("Note has been deleted", "toast", true);
    }
  };

  const editNote = (id, item, value) => {
    idNoteRef.current = id;
    const noteToEdit = notes.filter((note) => note.id);
    switch (item) {
      case "title":
        return (noteToEdit.title = value);
      case "text":
        return (noteToEdit.text = value);
      default:
        return noteToEdit;
    }
  };

  const [dialogType, setDialogType] = useState("modal");

  const handleDialogType = (type) => {
    setDialogType(type);
  };

  const [dialog, setDialog] = useState({
    message: "",
    type: dialogType,
    isLoading: false,
  });

  const handleDialog = (message, isLoading) => {
    setDialog({
      message: message,
      type: dialogType,
      isLoading: isLoading,
    });
  };

  const handleTransitionEnd = () => {
    handleDialog("", false);
  };

  const areYouSureDelete = (choice) => {
    if (choice) {
      // creates a new array with all notes not including the note with the specified id
      const newNotes = notes.filter((note) => note.id !== idNoteRef.current);
      setNotes(newNotes);
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  return (
    <div className="App">
      <Router>
        {nav}
        <Routes>
          <Route
            path="/"
            element={
              <AllNotesPage
                notes={notes}
                layout={display}
                handleDeleteNote={deleteNote}
                handleDialog={handleDialog}
                loadPattern={loadPattern}
              />
            }
          ></Route>
          <Route path="/folders" element={<FoldersPage />}></Route>
          <Route
            path="/search"
            element={
              <SearchPage
                searchPattern={searchPattern}
                handleSearchNote={setSearchText}
                handleScopedSearch={setScopedSearch}
                loadPattern={loadPattern}
                handleSearchResult={setSearchResult}
                searchResult={searchResult}
                notes={
                  searchResult !== "empty"
                    ? notes.filter((note) => {
                        switch (scopedSearch) {
                          case "Title":
                            return note.title
                              .toLowerCase()
                              .includes(searchText);
                          case "Date":
                            return note.date.toLowerCase().includes(searchText);
                          case "Text":
                            return note.text.toLowerCase().includes(searchText);
                          case null:
                            return null;
                          default:
                            note.title.toLowerCase().includes(searchText);
                        }
                        return "";
                      })
                    : []
                }
                // notes={
                //   scopedSearch !== ""
                //     ? notes.filter((note) => {
                // switch (scopedSearch) {
                //   case "Title":
                //     return note.title
                //       .toLowerCase()
                //       .includes(searchText);
                //   case "Date":
                //     return note.date.toLowerCase().includes(searchText);
                //   case "Text":
                //     return note.text.toLowerCase().includes(searchText);
                //   case null:
                //     return null;
                //   default:
                //     note.title.toLowerCase().includes(searchText);
                // }
                // return "";
                //       })
                //     : emptyNotes
                // }
                layout={display}
              />
            }
          ></Route>
          <Route
            path="/compose"
            element={
              <AddNote handleAddNote={addNote} handleDialog={handleDialog} />
            }
          ></Route>
          <Route
            path="/user"
            element={
              <UserSettingsPage
                handleDisplay={handleDisplay}
                handleNav={handleNav}
                handleDialogType={handleDialogType}
                handleSearchPattern={setSearchPattern}
                handleLoadPattern={setLoadPattern}
              />
            }
          ></Route>
        </Routes>
      </Router>
      {/* {dialog.isLoading &&
        (dialog.type === "modal")(
          <ConfirmModal onDialog={areYouSureDelete} message={dialog.message} />
        )} */}

      {/* {dialog.isLoading &&
        dialog.type ===
          "toast"(
            <ConfirmToast message={dialog.message} folder="saved notes" />
          )} */}
      {dialog.isLoading && dialog.type === "modal" ? (
        <ConfirmModal onDialog={areYouSureDelete} message={dialog.message} />
      ) : null}
      {dialog.isLoading && dialog.type === "toast" ? (
        <ConfirmToast
          message={dialog.message}
          isLoading={dialog.isLoading}
          handleDialog={handleDialog}
          folder=""
        />
      ) : null}
    </div>
  );
}

export default App;
