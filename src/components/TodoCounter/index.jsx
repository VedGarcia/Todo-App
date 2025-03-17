import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completeToDo,
        toDos,
    } = React.useContext(TodoContext)
    return(
        <h2 className='text-sky-500 text-4xl'>
            Has completado <span>{completeToDo}</span> de <span>{toDos.length}</span> ToDos
        </h2>
    )
}

export {TodoCounter};