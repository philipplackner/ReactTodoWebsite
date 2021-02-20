import React, { useState, createContext } from 'react'
import { todos as initialTodos } from './Data'

export const TodoListContext = createContext();

const TodoListProvider = props => {

    const [todos, setTodos] = useState(initialTodos)
    const [allTodos, setAllTodos] = useState(todos)

    return (
        <TodoListContext.Provider value={[todos, setTodos, allTodos, setAllTodos]}>
            {props.children}
        </TodoListContext.Provider>
    )
}


export default TodoListProvider