import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({
  handleSearchNote,
  handleScopedSearch,
  handleLoad,
  handleSearchResult,
}) => {
  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="searchContainer">
      <BiSearchAlt2 size={"2em"} />
      <input
        onChange={(event) => {
          if (event.target.value !== "") {
            setTimeout(() => {
              handleLoad();
              handleScopedSearch("Title");
              handleSearchNote(event.target.value.toLowerCase());
            }, 500);
            handleSearchResult("returned");
          } else {
            handleSearchResult("empty");
          }
        }}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
