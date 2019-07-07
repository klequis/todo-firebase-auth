import { TODO_ADD_KEY, TODOS_READ_KEY } from './constants'

import { blue } from 'logger'

const todos = [
  {
    title: 'default'
  }
]
export function todosReducer(
  state = todos,
  action
) {
  switch (action.type) {
    case TODOS_READ_KEY:
      return state
    case TODO_ADD_KEY:
      blue('action', action)
      blue('state', state)
      blue('payload', action.payload)
      const o = [...state, action.payload]
      console.log('o', o);
      
      return o
    default:
      return state
  }
}
