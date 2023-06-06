import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODO_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);


  // para indicar cuantos  ToDos se han completado y mostrarlo en el TodoCounter
  const completeToDo = toDos.filter((toDo) => !!toDo.complete).length;

  // para buscar TodoItem
  const searchedToDo = toDos.filter((toDo) => {
    return toDo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const addTodo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text,
      complete: false
    })
    saveToDos(newToDos);
  }

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
    <TodoContext.Provider
      value={{
        completeToDo,
        toDos,
        searchValue,
        setSearchValue,
        searchedToDo,
        deleteToDo,
        checkToDo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
