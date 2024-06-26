import { useState } from "react";

const TodoInput = (props) => {
    const {handleAddTodos, todoValue, setTodoValue} = props

    const addTodo = () => {
        if(todoValue) {
            handleAddTodos(todoValue)
            setTodoValue('')
        }
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            addTodo()
        }
    }
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} onKeyDown = {handleKeyDown} type="text" placeholder='Enter todo...' />
        <button onClick={addTodo}>Add</button>
    </header>
  )
}

export default TodoInput