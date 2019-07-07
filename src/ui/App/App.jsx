import React, { /*useState,*/ useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllTodos } from 'store/todo/selectors'
import { todosRead, todoAdd } from 'store/todo/actions'
import './App.css'
import DevTools from 'ui/DevTools'
import TodoList from 'ui/TodoList'
import NavBar from 'ui/NavBar'
import AddTodo from 'ui/AddTodo'

// eslint-disable-next-line
import { green, red } from 'logger'

const devToolStyle = {
  textAlign: 'left'
}

const App = props => {

  const { todosRead, todoAdd, todos } = props
  
  useEffect(() => {
    todosRead()
  })

  const handleAddTodo = async title => {
    await todoAdd({ title })
  }


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Your Todo List</h1>
        <AddTodo handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleAddTodo={handleAddTodo} />
      </header>
      <div style={devToolStyle}>
        <DevTools />
      </div>
    </div>
  )
}

const actions = { todosRead, todoAdd }

const mapStateToProps = state => {
  return {
    todos: getAllTodos(state)
  }
}

export default connect(
  mapStateToProps,
  actions
)(App)
