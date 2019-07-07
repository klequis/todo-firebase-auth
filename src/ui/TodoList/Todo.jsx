import React, { useState } from 'react'

// eslint-disable-next-line
import { green } from 'logger'

const todoStyle = {
  marginBottom: '1em',
  display: 'flex'
}

const row = {
  display: 'flex'
}

const label = {
  flexBasis: '15%',
  textAlign: 'right'
}

const data = {
  flexBasis: '70%',
  paddingLeft: '10px'
}

const Todo = props => {
  const { completed, title } = props.todo



  return (
    <div style={todoStyle}>
      <div>

        <div style={row}>
          <b style={label}>Title:</b>
          <div style={data}> {title}</div>
        </div>

        <div style={row}>
          <b style={label}>Completed:</b>
          <div style={data}> {completed ? 'yes' : 'no'}</div>
        </div>
      </div>
      
    </div>
  )
}

export default Todo
