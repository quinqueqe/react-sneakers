import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { FetchSneakersArgs, SneakersItem } from './types'

export const fetchSneakers = createAsyncThunk<
	SneakersItem[],
	FetchSneakersArgs
>('sneakers/getSneakers', async params => {
	const { currentPage, inputValue } = params
	const { data } = await axios.get(
		`https://67f95743094de2fe6ea13c4b.mockapi.io/items?page=${currentPage}&limit=4&search=${inputValue}`
	)
	return data
})
