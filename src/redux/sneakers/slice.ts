import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SneakersItem, SneakersState, Status } from './types'
import { fetchSneakers } from './asyncActions'

const initialState: SneakersState = {
	inputValue: '',
	status: Status.LOADING,
	items: [],
	currentPage: 1,
}

export const sneakersSlice = createSlice({
	name: 'sneakers',
	initialState,
	reducers: {
		setInputValue(state, action: PayloadAction<string>) {
			state.inputValue = action.payload
		},
		setItems(state, action: PayloadAction<SneakersItem[]>) {
			state.items = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchSneakers.pending, state => {
			state.items = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchSneakers.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchSneakers.rejected, state => {
			state.items = []
			state.status = Status.ERROR
		})
	},
})

export const { setInputValue, setItems, setCurrentPage } = sneakersSlice.actions
export default sneakersSlice.reducer
