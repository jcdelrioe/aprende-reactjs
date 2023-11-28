import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const DEFAULT_STATE: UserWithId[] = [
  {
    id: '1',
    name: 'Peter Doe',
    email: 'peter@example.com',
    github: '@jcdelrioe',
  },
  {
    name: 'Lena Whitehouse',
    id: '2',
    email: 'lena@example.com',
    github: '@lena',
  },
  {
    name: 'Phil Less',
    id: '3',
    email: 'phil@example.com',
    github: '@phil',
  },
  {
    name: 'John Camper',
    id: '4',
    email: 'john@example.com',
    github: '@john',
  },
  {
    name: 'Max Balmoore',
    id: '5',
    email: 'max@example.com',
    github: '@max',
  },
  {
    name: 'Peter Moore',
    id: '6',
    email: 'peter2@example.com',
    github: '@peter2',
  },
  {
    name: 'Joe Sachs',
    id: '7',
    email: 'joe@example.com',
    github: '@midudev',
  },
]
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')

  if (persistedState) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})() //Inmiately invoqued function expresion IIFE

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.push({ id, ...action.payload })
      // return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user.id === action.payload.id)

      if (!isUserAlreadyDefined) {
        state.push(action.payload)
        // return [...state, action.payload]
      }
    },
  },
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions
