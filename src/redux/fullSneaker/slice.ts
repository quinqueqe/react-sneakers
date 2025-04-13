import { createSlice } from '@reduxjs/toolkit'
import { fetchSneaker } from './asyncActions'
import { FullSneakerState, FullSneakerStatus } from './types'

const initialState: FullSneakerState = {
	item: [],
	status: FullSneakerStatus.LOADING
}

export const fullSneakerSlice = createSlice({
	name: 'fullSneaker',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSneaker.pending, (state, action) => {
			state.item = []
			state.status = FullSneakerStatus.LOADING
		})
		builder.addCase(fetchSneaker.fulfilled, (state, action) => {
			state.item = action.payload
			state.status = FullSneakerStatus.SUCCESS
		})
		builder.addCase(fetchSneaker.rejected, (state, action) => {
			state.item = []
			state.status = FullSneakerStatus.ERROR
		})
	},
})

// export const { } = fullSneakerSlice.actions
export default fullSneakerSlice.reducer
