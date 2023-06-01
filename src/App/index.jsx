import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";
// const dTodos = [
//   { text: "Cortar cabello", complete: true },
//   { text: "Preparar diapositivas", complete: false },
//   { text: "Correjir tarea de ingles", complete: true },
//   { text: "Aprender estados derivados", complete: true },
//   { text: "Participar del Algo+", complete: false },
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(dTodos));

// localStorage.removeItem('TODO_V1')


function App() {
  const {
    item: toDos, 
    saveItem: saveToDos, 
    loading, 
    error
  } = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = React.useState("");

  // para indicar cuantos  ToDos se han completado y mostrarlo en el TodoCounter
  const completeToDo = toDos.filter((toDo) => !!toDo.complete).length;

  // para buscar TodoItem
  const searchedToDo = toDos.filter((toDo) => {
    return toDo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const checkToDo = (text) => {
    // = completeTodo en el video
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);

    newToDos[toDoIndex].complete = !newToDos[toDoIndex].complete;
    saveToDos(newToDos);
  };
  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <AppUI
    completeToDo={completeToDo}
    toDos={toDos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedToDo={searchedToDo}
    checkToDo={checkToDo}
    deleteToDo={deleteToDo}
    loading={loading}
    error={error}
    />
  
  )
}

export default App;
