import { createContext, useContext, useEffect, useState } from 'react'

import { useQueryGames } from 'graphql/queries/games'
import formatPrice from 'utils/formatPrice'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartItemsMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  name: string
  price: string
  slug: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  loading: boolean
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  loading: false,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data, loading } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  const total =
    data?.games.reduce((acc, game) => {
      return acc + game.price
    }, 0) || 0

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (newCartItems: string[]) => {
    setCartItems(newCartItems)
    setStorageItem(CART_KEY, newCartItems)
  }

  const addToCart = (id: string) => {
    saveCart([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    const newItems = cartItems.filter((itemId) => itemId !== id)
    saveCart(newItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItemsMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total),
        loading,
        isInCart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
