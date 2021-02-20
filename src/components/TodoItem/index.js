import React, { useState, useContext } from 'react'
import { TitleBarContext } from '../TitleBar/TitleBarContext'
import { TodoListContext } from '../TodoList/TodoListContext'
import { TodoCheckMark, TodoItemCheckBox, TodoItemCheckBoxInput, TodoItemCloseButton, TodoItemContainer, TodoItemText } from './TodoItemElements'

const TodoItem = ({todoId, isChecked, title}) => {

    const [isCheckedState, setIsChecked] = useState(isChecked)
    const [isMouseOver, setIsMouseOver] = useState(false)

    const [todos, setTodos, allTodos, setAllTodos] = useContext(TodoListContext)

    const [isDarkMode] = useContext(TitleBarContext)

    const toggleOnChecked = () => {
        const newIsChecked = !isCheckedState
        setIsChecked(newIsChecked)
      
        const todoIndex = allTodos.findIndex(todo => todo.id == todoId)
        allTodos[todoIndex].isChecked = newIsChecked
        setAllTodos(todos)
    }

    const deleteTodo = () => {
      const newTodos = allTodos.filter((todo, i, arr) => todo.id != todoId)
      setAllTodos(newTodos)
      setTodos(newTodos)
    }

    return (
      <TodoItemContainer
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        isDarkMode={isDarkMode}
      >
        <TodoItemCheckBox isChecked={isCheckedState} isDarkMode={isDarkMode}>
          <TodoItemCheckBoxInput
            checked={isCheckedState}
            onChange={toggleOnChecked}
            type="checkbox"
            isDarkMode={isDarkMode}
          />
          <TodoCheckMark isChecked={isCheckedState} isDarkMode={isDarkMode} />
        </TodoItemCheckBox>
        <TodoItemText
          isChecked={isCheckedState}
          onClick={toggleOnChecked}
          isDarkMode={isDarkMode}
        >
          {title}
        </TodoItemText>
        <TodoItemCloseButton
          src="/images/icon-cross.svg"
          isMouseOver={isMouseOver}
          onClick={deleteTodo}
          isDarkMode={isDarkMode}
        />
      </TodoItemContainer>
    );
}

export default TodoItem
