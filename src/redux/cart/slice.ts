import { createSlice } from '@reduxjs/toolkit'
import { CartState } from './types'

const initialState: CartState = {
	items: []
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
	},
})

export const { setItem } = cartSlice.actions
export default cartSlice.reducer
