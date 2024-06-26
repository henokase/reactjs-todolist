import { useState, useEffect } from "react";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos).todos;
      setTodos(parsedTodos);
    }
  }, []);

  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App