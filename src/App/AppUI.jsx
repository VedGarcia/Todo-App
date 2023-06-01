import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodoLoading";
import { EmptyTodo } from "../components/EmptyTodo";
import { TodoError } from "../components/TodoError";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
    completeToDo,
    toDos,
    searchValue,
    setSearchValue,
    searchedToDo,
    deleteToDo,
    checkToDo,
    loading,
    error
}){
    
    return (
    <>
      <h1>ToDo App</h1>
      <TodoCounter completed={completeToDo} total={toDos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && searchedToDo.length == 0) && <EmptyTodo />}
        {searchedToDo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => checkToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };