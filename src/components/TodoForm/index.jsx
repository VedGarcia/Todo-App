import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    };
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    return (
        <form>
            <label>
                Escribe un nuevo ToDo
            </label>
            <textarea 
            placeholder="Nuevo ToDo" 
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
            <button
            type="button"
            className="TodoForm-button TodoForm-button--close"
            onClick={onCancel}
            >cancelar</button>
            <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            onClick={onSubmit}
            >añadir</button>

            </div>
        </form>
    )
}

export { TodoForm }