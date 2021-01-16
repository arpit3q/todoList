import React, { useState } from 'react'
import {TodoAdd} from '../component/todoAddComponent/todoAddComponent'
import { TodoListViewer  } from '../component/todoListViewer/todoListViewer';

export const TodoPage = () => {
    const [todoItems, setTodoItems]  = useState(JSON.parse(localStorage.getItem('todo')|| '[]'));

return <React.Fragment>
    <div className="main-container">
        <TodoAdd setTodoItems = {setTodoItems}></TodoAdd>
        <TodoListViewer todoItems={todoItems} setTodoItems = {setTodoItems}></TodoListViewer>
    </div>
</React.Fragment>
}


 