import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from './types'
import { SneakersItem } from '../sneakers/types'

const initialState: CartState = {
	itemsCart: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsCart(state, action: PayloadAction<SneakersItem>) {
			const findItem = state.itemsCart.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.addedCart = true
			} else {
				state.itemsCart.push({
					...action.payload,
					addedCart: true,
				})
			}
		},
		clearCart(state) {
			state.itemsCart = []
			state.totalPrice = 0
		},
		deleteItemCart(state, action) {
			const findItem = state.itemsCart.find(obj => obj.id === action.payload)
			if (findItem) {
				state.itemsCart = state.itemsCart.filter(obj => obj.id !== action.payload)
				state.totalPrice -= findItem.price
			}
		},
		setTotalPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload
		},
	},
})

export const { setItemsCart, clearCart, deleteItemCart, setTotalPrice } =
	cartSlice.actions
export default cartSlice.reducer
