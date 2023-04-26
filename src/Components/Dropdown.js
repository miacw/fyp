import React, { useState } from "react";

const Dropdown = ({ menuTitle, menuOptions, handleFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button
        onClick={(event) => {
          handleOpen();
        }}
      >
        {menuTitle}
      </button>
      {open ? (
        <ul className="menu">
          {menuOptions.map((option) => {
            return (
              <li className="menu-item">
                <button
                  onClick={() => {
                    handleFunction(option.functionParam);
                    handleOpen();
                  }}
                >
                  {option.option}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
