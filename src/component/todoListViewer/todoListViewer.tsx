import React, { useState } from "react";

const deleteItem = (index : number, setTodoItems: any)=>{
    const todo: any[] = JSON.parse(localStorage.getItem('todo') || '[]')
    todo.splice(index,1)
    localStorage.setItem('todo',JSON.stringify(todo));
    setTodoItems(todo)
}

const editItem = (index : number, setTodoItems: any, inputValue: string,setInputValue:any, setTrigger: any)=>{
    const todo: any[] = JSON.parse(localStorage.getItem('todo') || '[]');
    todo[index] = inputValue
    localStorage.setItem('todo',JSON.stringify(todo));
    console.log("edit", todo)
    setTodoItems(todo)
    setTrigger(-1);
    setInputValue('')
}
const selectedItem =(index: number, array: any)=>{
    array.push(indexedDB)
}
const deleteAllSelecetedItem = (setTodoItem: any, array: any)=>{
    const todo: any[] = JSON.parse(localStorage.getItem('todo') || '[]')
    for (let i = 0; i < array.length; i++) {
        todo.splice(array[i],1)
    }
    localStorage.setItem('todo',JSON.stringify(todo));
    setTodoItem(todo)
}
export const TodoListViewer = ({todoItems, setTodoItems}:{todoItems:any[], setTodoItems:any}) => {
    const [triggerInput, setTrigger] = useState(-1);
    const [inputValue,setInputValue] = useState('');
    const isDeleteSelectedVisible = true;
    const deleteditemarray: any[] = [];
    return <React.Fragment>
        <div className="todo-list-container">
            {todoItems.map((eachtodo : any, index: any) => 
                <div className="item-container" key={index} onClick = {()=>{selectedItem(index,deleteditemarray)}}>
                    <div className="temp">{index + 1}. {triggerInput===index? <input type="text" value={inputValue} onChange={(el)=>setInputValue(el.target.value)}/>:  eachtodo}</div>
                    <div className="temp"><button className="action" onClick = {()=>{deleteItem(index, setTodoItems); setInputValue(''); setTrigger(-1)}}>Delete</button></div>
                    <div className="temp">{triggerInput===index? 
                        <button className="action" onClick = {()=>editItem(index, setTodoItems, inputValue, setInputValue, setTrigger)}>Done</button>
                        :
                        <button className="action" onClick = {()=>{setTrigger(index); setInputValue(eachtodo)}}>Edit</button>
                    }</div>
                </div>
                )
            }
            {isDeleteSelectedVisible? <div className="footer-action"><button className="delete-selected" onClick = {()=>{deleteAllSelecetedItem(setTodoItems,deleteditemarray)}}>Delete Selected</button></div>: null}

        </div>
    </React.Fragment>
}