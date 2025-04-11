import { configureStore } from '@reduxjs/toolkit'
import sneakers from './sneakers/slice'
import cart from './cart/slice'

export const store = configureStore({
	reducer: {
		sneakers,
		cart,
	},
})



