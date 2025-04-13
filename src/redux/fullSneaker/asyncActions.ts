import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { SneakersItem } from '../sneakers/types'
import { fetchSneakerArgs } from './types'

export const fetchSneaker = createAsyncThunk<SneakersItem[], fetchSneakerArgs>(
	'items/fetchGetSneaker',
	async (params) => {
		const {id} = params
		const { data } = await axios.get(
			`https://67f95743094de2fe6ea13c4b.mockapi.io/items/${id}`
		)
		return data
	}
)
