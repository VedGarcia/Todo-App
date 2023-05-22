import React from "react";
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
  // para indicar cuantos  ToDos se han completado y mostrarlo en el TodoCounter
  const completeToDo = toDos.filter(toDo => !!toDo.complete).length;
  
  // para buscar TodoItem
  const searchedToDo = toDos.filter(toDo => {
    return toDo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const checkToDo = (text) => { // = completeTodo en explicacion
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text == text);

    newToDos[toDoIndex].complete = !newToDos[toDoIndex].complete;
    setToDos(newToDos)
  };
  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text == text);
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <TodoCounter 
        completed={completeToDo} 
        total={toDos.length} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedToDo.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          complete={todo.complete}
          onComplete={() => checkToDo(todo.text)}
          onDelete={()=>deleteToDo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
