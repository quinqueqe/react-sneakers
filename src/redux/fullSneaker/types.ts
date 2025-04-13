import { SneakersItem } from '../sneakers/types'

export interface FullSneakerState {
	item: SneakersItem[]
	status: string
}

export type fetchSneakerArgs = {
	id: string
}

export enum FullSneakerStatus {
	LOADING = 'loading',
	SUCCESS = 'succes',
	ERROR = 'error'
}