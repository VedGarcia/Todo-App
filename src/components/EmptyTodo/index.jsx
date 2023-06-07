import React from "react";
import "./EmptyTodo.css"

function EmptyTodo({ message }) {
    return(
        <p className="EmptyTodo">{message}</p>
    )
}

export { EmptyTodo }