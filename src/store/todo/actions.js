import {
  TODO_ADD_KEY,
  TODOS_READ_KEY,
} from './constants'

// eslint-disable-next-line
import { purple } from 'logger'

// Read
export const todosRead = (todos) => {
  return {
    type: TODOS_READ_KEY,
    payload: todos
  }
}

export const todoAdd = (todo) => {
  return {
    type: TODO_ADD_KEY,
    payload: todo
  }
}
