import React from "react";

const ElementMarker = (props) => {
  return (
    <span>
      {props.showInput ? (
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
        ></input>
      ) : (
        <span onClick={props.handleDoubleClick}>{props.value}</span>
      )}
    </span>
  );
};

export default ElementMarker;
