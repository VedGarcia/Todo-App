import React from "react";
import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const dTodos = [
  { text: "Cortar cabello", complete: true },
  { text: "Preparar diapositivas", complete: false },
  { text: "Correjir tarea de ingles", complete: true },
  { text: "Aprender estados derivados", complete: true },
  { text: "Participar del Algo+", complete: false },
];

function App() {
  const [toDos, setToDos] = React.useState(dTodos);
  const [searchValue, setSearchValue] = React.useState("");
  

  let completeToDo = toDos.filter(toDo => !!toDo.complete).length;

  let searchedToDo = toDos.filter(toDo => {
    return toDo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  console.log("Los usuarios buscan ToDos de " + searchValue);
  return (
    <>
      <h1>ToDo App</h1>
      <TodoCounter completed={completeToDo} total={toDos.length} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedToDo.map((todo) => (
          <TodoItem 
          key={todo.text+Date()} 
          text={todo.text} 
          complete={todo.complete} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
