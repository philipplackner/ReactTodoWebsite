import React, {useContext, useState} from 'react'
import { TitleBarContext } from '../TitleBar/TitleBarContext'
import { TodoListContext } from '../TodoList/TodoListContext'
import { FilterClearCompletedP, FilterContainer, FilterItemCountP, FilterSpan, FooterContainer } from './ListItemsFooterElements'

const ListItemsFooter = () => {

    const [selectedFilterItem, setSelectedFilterItem] = useState(0)

    const [todos, setTodos, allTodos, setAllTodos] = useContext(TodoListContext)

    const [isDarkMode] = useContext(TitleBarContext)

    const showAllTodos = () => {
      console.log(`All todos are ${allTodos}`)
      setTodos(allTodos)
    }

    const showActiveTodos = () => {
      setTodos(
        allTodos.filter((todo, i, arr) => !todo.isChecked)
      )
    }

    const showCompletedTodos = () => {
      setTodos(
        allTodos.filter((todo, i, arr) => todo.isChecked)
      )
    }

    const clearCompletedTodos = () => {
      const uncompletedTodos = allTodos.filter((todo, i, arr) => !todo.isChecked)
      setAllTodos(uncompletedTodos)
      if(selectedFilterItem == 0) {
        setTodos(uncompletedTodos)
      } else if(selectedFilterItem == 1) {
        setTodos(uncompletedTodos.filter((todo, i, arr) => !todo.isChecked));
      } else {
        setTodos([])
      }
    }

    return (
      <FooterContainer isDarkMode={isDarkMode}>
        <FilterItemCountP isDarkMode={isDarkMode}>{todos.length} items left</FilterItemCountP>
        <FilterContainer>
          <FilterSpan
            onClick={() => {
              setSelectedFilterItem(0)
              showAllTodos()
            }}
            isSelected={selectedFilterItem == 0}
            isDarkMode={isDarkMode}
          >
            All
          </FilterSpan>
          <FilterSpan
            onClick={() => {
              setSelectedFilterItem(1)
              showActiveTodos()
            }}
            isSelected={selectedFilterItem == 1}
            isDarkMode={isDarkMode}
          >
            Active
          </FilterSpan>
          <FilterSpan
            onClick={() => {
              setSelectedFilterItem(2)
              showCompletedTodos()
            }}
            isSelected={selectedFilterItem == 2}
            isDarkMode={isDarkMode}
          >
            Completed
          </FilterSpan>
        </FilterContainer>
        <FilterClearCompletedP onClick={clearCompletedTodos} isDarkMode={isDarkMode}>Clear Completed</FilterClearCompletedP>
      </FooterContainer>
    );
}

export default ListItemsFooter
