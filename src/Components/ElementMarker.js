import React from "react";

const ElementMarker = (props) => {
  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <span className="input-span">
      {props.showInput ? (
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          onKeyDown={({ key }) => key === "Enter" && props.onBlur}
          autoFocus
          onFocus={handleFocus}
        ></input>
      ) : (
        <span onClick={props.handleClick}>{props.value}</span>
      )}
    </span>
  );
};

export default ElementMarker;
