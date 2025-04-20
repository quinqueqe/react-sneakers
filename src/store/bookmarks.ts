import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import { SneakersItem } from './sneakers'

interface BookmarksState {
	itemsBs: BookmarksItem[]
	setItemsBs: (item: SneakersItem) => void
	deleteItemBs: (id: string) => void
}

type BookmarksItem = {
	id: string
	img: string
	title: string
	price: number
	addedBs: boolean
}

export const useBookmarks = create<BookmarksState>()(
	devtools(
		persist(
			set => ({
				itemsBs: [],
				setItemsBs: item => {
					set(state => {
						const itemsCopy = [...state.itemsBs]
						const findItem = itemsCopy.find(obj => obj.id === item.id)
						if (findItem) {
							findItem.addedBs = true // Мутация копии допустима
						} else {
							itemsCopy.push({ ...item, addedBs: true })
						}
						return { itemsBs: itemsCopy }
					})
				},
				deleteItemBs: (id: string) => {
					set(state => ({
						itemsBs: state.itemsBs.filter(obj => obj.id !== id),
					}))
				},
			}),
			{
				name: 'bookmarks-storage', // ключ в localStorage
				storage: createJSONStorage(() => localStorage), // можно указать другое хранилище
			}
		)
	)
)
