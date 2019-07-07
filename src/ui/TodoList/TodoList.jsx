import React from 'react'
import Todo from './Todo'
// eslint-disable-next-line
import { green } from 'logger'

const todoListStyle = {
  paddingTop: '1em'
}

const TodoList = props => {
  const { todos } = props
  return (
    <div style={todoListStyle}>
      {
        todos.map(t => {
          return <Todo
            key={t.title}
            todo={t}
          />
        }
        
        
        
        )
      }
    </div>
  )
}

export default TodoList
