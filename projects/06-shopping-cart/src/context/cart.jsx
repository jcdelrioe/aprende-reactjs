import { createContext, useState } from 'react'

// 1. crear contexto
export const CartContext = createContext()

// 2/ crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    //Check if product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCartIndex >= 0) {
      //una forma seria usando structureClone para hacer copias profundas de arrays y objetos
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
