import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import axios from 'axios'

interface FullSneakerState {
	item: SneakersItem[]
	status: string
	fetchSneaker: (item: SneakersItem) => void
}

interface SneakersState {
	inputValue: string
	status: string
	items: SneakersItem[]
	currentPage: number
	setInputValue: (value: string) => void
	setItems: (value: SneakersItem) => void
	setCurrentPage: (value: number) => void
	fetchSneakers: (params: FetchSneakersArgs) => void
}

export type SneakersItem = {
	id: string
	img: string
	title: string
	price: number
}

type FetchSneakersArgs = {
	currentPage: number
	inputValue: string
}

enum FullSneakerStatus {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export const useSneakers = create<SneakersState>()(
	devtools(set => ({
		inputValue: '',
		status: Status.LOADING,
		items: [],
		currentPage: 1,
		setInputValue: value => set({ inputValue: value }),
		setItems: value => set({ items: [value] }),
		setCurrentPage: value => set({ currentPage: value }),
		fetchSneakers: async params => {
			set({ items: [], status: Status.LOADING })
			const { currentPage, inputValue } = params
			const { data } = await axios.get(
				`https://67f95743094de2fe6ea13c4b.mockapi.io/items?page=${currentPage}&limit=4&search=${inputValue}`
			)
			try {
				set({ items: data, status: Status.SUCCESS })
			} catch {
				set({ items: [], status: Status.ERROR })
			}
		},
	}))
)

export const useFullSneaker = create<FullSneakerState>()(
	devtools(
		persist(
			set => ({
				item: [],
				status: FullSneakerStatus.LOADING,
				fetchSneaker: async params => {
					set({ item: [], status: FullSneakerStatus.LOADING })
					const { id } = params
					try {
						const { data } = await axios.get(
							`https://67f95743094de2fe6ea13c4b.mockapi.io/items/${id}`
						)
						set({ item: data, status: FullSneakerStatus.SUCCESS })
					} catch {
						set({ item: [], status: FullSneakerStatus.ERROR })
					}
				},
			}),
			{
				name: 'fullSneaker-storage', // ключ в localStorage
				storage: createJSONStorage(() => localStorage), // можно указать другое хранилище
			}
		)
	)
)
