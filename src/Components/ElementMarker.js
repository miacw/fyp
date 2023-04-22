import React from "react";

const ElementMarker = (props) => {
  const handleFocus = (event) => {
    event.target.select();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.handleBlur();
    }
  };

  return (
    <span className="input-span">
      {props.showInput ? (
        <input
          type="text"
          placeholder={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          //returnKeyType="return"
          onKeyDown={handleKeyPress}
          //autoFocus
          onFocus={handleFocus}
        ></input>
      ) : (
        <span onClick={props.handleClick}>{props.value}</span>
      )}
    </span>
  );
};

export default ElementMarker;
