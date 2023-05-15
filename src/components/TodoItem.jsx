import React from "react";
// import './TodoItem.css';

function TodoItem({ text }) {
  return (
    <>
      <li key={text} className="TodoItem">
        <span>√</span>
        <p>
          {text}
        </p>  
        <span>x</span>
      </li>
    </>
  );
}

export { TodoItem };
