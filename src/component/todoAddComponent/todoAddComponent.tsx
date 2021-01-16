import React, {useState} from 'react';

const save = (value: string, setTodoItems: any)=>{
    if (value.trim()!==''){
    const todo: any[] = JSON.parse(localStorage.getItem('todo') || '[]');
    todo.push(value)
    localStorage.setItem('todo',JSON.stringify(todo)); 
    setTodoItems(todo)
    }
}

export const TodoAdd = ({setTodoItems}:{setTodoItems:any}) => {
const [inputValue, setInputValue] = useState('');




return <React.Fragment>
    <div className="add-container">
        <div className="temp">Todo - </div>
        <div className="temp"><input type="text" onChange={(el)=>setInputValue(el.target.value)} className="add-todo" placeholder="todo it here..."/></div>
        <div className="temp"><button className="add-button" onClick = {()=>{save(inputValue, setTodoItems)}}>Add</button></div>

    </div>
</React.Fragment> 
}
