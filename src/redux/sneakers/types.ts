export interface SneakersState {
	inputValue: string
	status: string
	items: SneakersItem[]
}

export type SneakersItem = {
	id: string
	img: string
	title: string
	price: string
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
