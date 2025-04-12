export interface SneakersState {
	inputValue: string
	status: string
	items: SneakersItem[]
	currentPage: number
}

export type SneakersItem = {
	id: string
	img: string
	title: string
	price: number
}

export type FetchSneakersArgs = {
	currentPage: number
	inputValue: string
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
