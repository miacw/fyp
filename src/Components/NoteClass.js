import React from "react";
import { RiStickyNoteFill } from "react-icons/ri";
import FoldersData from "./FoldersData";
import "./NoteList.css";

export default class NoteClass extends React.Component {
  constructor() {
    super();
    this.noteClicked = this.noteClicked.bind(this);
  }

  noteClicked(props) {
    let foldersData = FoldersData();
    console.log(foldersData);
  }

  render() {
    return (
      <div className="Container">
        <div className="NoteIcon">
          <span>
            <RiStickyNoteFill size={56} />
          </span>
        </div>
        <div className="Info">
          <h1>{this.props.title}</h1>
          <h2>{this.props.date}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="NoteIcon">
          <button onClick={this.noteClicked}>{">"}</button>
        </div>
      </div>
    );
  }
}
