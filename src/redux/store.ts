import { configureStore } from '@reduxjs/toolkit'
import sneakers from './sneakers/slice'
import cart from './cart/slice'
import bookmarks from './bookmarks/slice'

export const store = configureStore({
	reducer: {
		sneakers,
		cart,
		bookmarks,
	},
})
