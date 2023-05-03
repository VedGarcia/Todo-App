import { useState } from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

const todos = [
  { text: "Cortar cabello", complete: false },
  { text: "Preparar diapositivas", complete: false },
  { text: "Correjir tarea de ingles", complete: false },
  { text: "Participar del Algo+", complete: false },
];

function App() {
  return (
    <>
      <h1>ToDo App</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo=>(
            <TodoItem />
          ))
        }
      </TodoList>
    </>
  );
}

export default App;
