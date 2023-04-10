import React from "react";
import { ImHome } from "react-icons/im";
import { BiSearchAlt2, BiMessageDetail } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

export const BurgerNavData = [
  {
    title: "Home",
    path: "/",
    icon: <ImHome />,
    className: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <BiSearchAlt2 />,
    className: "nav-text",
  },
  {
    title: "Folders",
    path: "/folders",
    icon: <FaFolderOpen />,
    className: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <AiOutlineUser />,
    className: "nav-text",
  },
  {
    title: "Compose",
    path: "/compose",
    icon: <BiMessageDetail />,
    className: "nav-text",
  },
];
