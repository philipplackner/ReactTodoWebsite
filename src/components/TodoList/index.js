import React, { useContext } from 'react'
import TodoItem from '../TodoItem'
import { TodoListContainer, TodoListWrapper } from './TodoListElements'
import { todos } from "./Data";
import ListItemsFooter from '../ListItemsFooter';
import {TodoListContext} from './TodoListContext'
import { TitleBarContext } from '../TitleBar/TitleBarContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodoList = () => {

  const [todos, setTodos] = useContext(TodoListContext)

  const [isDarkMode] = useContext(TitleBarContext)

  const handleOnDragEnd = (result) => {
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTodos(items)
  }

  return (
    <TodoListWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(providedDroppable) => (
            <div
              ref={providedDroppable.innerRef}
              {...providedDroppable.droppableProps}
            >
              <TodoListContainer isDarkMode={isDarkMode} className="todos">
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem
                          todoId={todo.id}
                          isChecked={todo.isChecked}
                          title={todo.title}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </TodoListContainer>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ListItemsFooter />
    </TodoListWrapper>
  );
}

export default TodoList
