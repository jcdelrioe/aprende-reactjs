export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

//update localStorage with state for cart

export const updateLocaleStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        //una forma seria usando structureClone para hacer copias profundas de arrays y objetos
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocaleStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ]

      updateLocaleStorage(newState)
      return newState
    }
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocaleStorage(newState)
      return newState
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocaleStorage([])
      return []
    }
  }

  return state
}
