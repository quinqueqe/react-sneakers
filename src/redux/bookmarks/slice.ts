import { createSlice } from '@reduxjs/toolkit'
import { BookmarksState } from './types'

const initialState: BookmarksState = {
	itemsBs: [],
}

export const bookmarksSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		setItemsBs(state, action) {
			const findItem = state.itemsBs.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.addedBs = true
			} else {
				state.itemsBs.push({
					...action.payload,
					addedBs: true,
				})
			}
		},
		deleteItemBs(state, action) {
			const findItem = state.itemsBs.find(obj => obj.id === action.payload)
			if (findItem) {
				state.itemsBs = state.itemsBs.filter(obj => obj.id !== action.payload)
			}
		},
	},
})

export const { setItemsBs, deleteItemBs } = bookmarksSlice.actions
export default bookmarksSlice.reducer
