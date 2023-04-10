import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const ScopedSearch = ({
  handleScopedSearch,
  handleSearchNote,
  handleLoad,
  handleSearchResult,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [dropdownText, setDropdownText] = useState("Category");
  const [searchInput, setSearchInput] = useState("");
  const [updated, setUpdated] = useState(searchInput);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClick = () => {
    setUpdated(searchInput);
  };

  return (
    <div>
      <div className="searchContainer scoped">
        <BiSearchAlt2 size={"2em"} />
        <input
          className="searchInput"
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
          placeholder="type to search..."
        />
        <button
          onClick={() => {
            if (searchInput === "") {
              handleSearchResult("empty");
            } else {
              handleSearchResult("returned");
            }
            handleLoad();
            handleScopedSearch(dropdownText);
            handleClick();
            handleSearchNote(searchInput);
          }}
        >
          Search
        </button>
      </div>
      <div className="search">
        <button onClick={handleOpen}>{dropdownText}</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button
                onClick={() => {
                  handleOpen();
                  setDropdownText("Title");
                  //handleScopedSearch("Title");
                }}
              >
                Title
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  handleOpen();
                  setDropdownText("Date");
                  //handleScopedSearch("Date");
                }}
              >
                Date
              </button>
            </li>
            <li className="menu-item">
              <button
                onClick={() => {
                  handleOpen();
                  setDropdownText("Folder");
                }}
              >
                Folder
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default ScopedSearch;
