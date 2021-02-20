import React, { useContext, useState } from 'react'
import { TodoBarContainer, TodoCircle, TodoTextField } from './TodoBarElements'
import {TodoListContext} from '../TodoList/TodoListContext'
import {TitleBarContext} from '../TitleBar/TitleBarContext'
import { v4 as uuid} from 'uuid'

const TodoBar = () => {

  const [todos, setTodos, allTodos, setAllTodos] = useContext(TodoListContext)

  const [newTodoTitle, setNewTodoTitle] = useState('')

  const [isDarkMode] = useContext(TitleBarContext)

  const onTodoTitleChange = (e) => {
    setNewTodoTitle(e.target.value)
  }

  const onKeyUp = e => {
    if(e.key === 'Enter') {
      const newTodos = [...allTodos, 
        {
          isChecked: false,
          title: newTodoTitle,
          id: uuid()
        }]
      setTodos(newTodos)
      setAllTodos(newTodos)
      e.target.value = ''
    }
  }


  return (
    <>
      <TodoBarContainer isDarkMode={isDarkMode}>
        <TodoCircle isDarkMode={isDarkMode} />
        <TodoTextField onChange={onTodoTitleChange} placeholder="Create a new todo..." onKeyUp={onKeyUp} isDarkMode={isDarkMode} />
      </TodoBarContainer>
    </>
  );
}

export default TodoBar
