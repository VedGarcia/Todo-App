import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completeToDo,
        toDos,
    } = React.useContext(TodoContext)
    return(
        <h2 className='TodoCounter'>
            Has completado <span>{completeToDo}</span> de <span>{toDos.length}</span> tareas
        </h2>
    )
}

export {TodoCounter};