import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from './types'

const initialState: CartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.added = true
			} else {
				state.items.push({
					...action.payload,
					added: true,
				})
			}
		},
		clearCart(state) {
			state.items = []
			state.totalPrice = 0
		},
		deleteItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				state.items = state.items.filter(obj => obj.id !== action.payload)
				state.totalPrice -= findItem.price
			}
		},
		setTotalPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload
		},
	},
})

export const { setItem, clearCart, deleteItem, setTotalPrice } =
	cartSlice.actions
export default cartSlice.reducer
