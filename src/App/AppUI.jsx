import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodoLoading";
import { EmptyTodo } from "../components/EmptyTodo";
import { TodoError } from "../components/TodoError";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoContext } from "../components/TodoContext";
import { Layout } from "../components/Layout";

function AppUI() {
  const {
    toDos,
    searchedToDo,
    deleteToDo,
    checkToDo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <Layout>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && toDos.length == 0 && (
          <EmptyTodo message={"¡Ingresa tu primer ToDo!"} />
        )}
        {searchedToDo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => checkToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
        {searchedToDo.length === 0 && toDos.length > 0 && (
          <EmptyTodo message={"No hay resultados para la busqueda"} />
        )}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </Layout>
  );
}

export { AppUI };
