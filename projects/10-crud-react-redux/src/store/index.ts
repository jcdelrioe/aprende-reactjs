import { Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
  }

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  const previousState = store.getState()

  next(action)

  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToRemove = previousState.users.find(
      (user) => user.id === userIdToRemove
    )
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`ususario ${payload}`)
        }
        throw new Error('Error al eliminar el usuario')
      })
      .catch((e) => {
        toast.error(`Error deleting user ${userIdToRemove}`)
        if (userToRemove) store.dispatch(rollbackUser(userToRemove))
        console.log(e, 'error')
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabase],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
