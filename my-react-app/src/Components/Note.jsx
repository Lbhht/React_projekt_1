import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}

export default Note;
