import { createSlice } from '@reduxjs/toolkit'

import MenuItemOBJ from '../../models/MenuItems'

type CartItem = MenuItemOBJ

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const lastItemId =
        state.items.length > 0 ? state.items[state.items.length - 1].id : 0
      const newItem = { ...action.payload, id: lastItemId + 1 } // Incrementa o ID do último item
      state.items = [...state.items, newItem]
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id != action.payload
      )
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
