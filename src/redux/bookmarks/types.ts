export interface BookmarksState {
	itemsBs: BookmarksItem[]
}

export type BookmarksItem = {
	id: string
	img: string
	title: string
	price: number
	addedBs: boolean
}