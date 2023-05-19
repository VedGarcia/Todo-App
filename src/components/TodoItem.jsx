import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${props.complete && "Icon-check--active"}`}>
          √
        </span>
        <p
          className={`TodoItem-p ${props.complete && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete">x</span>
      </li>
    </>
  );
}

export { TodoItem };
