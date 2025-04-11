import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { SneakersItem } from './types'

export const fetchSneakers = createAsyncThunk<SneakersItem[]>(
	'sneakers/getSneakers',
	async () => {
		const { data } = await axios.get(
			'https://67f95743094de2fe6ea13c4b.mockapi.io/items'
		)
		return data
	}
)
