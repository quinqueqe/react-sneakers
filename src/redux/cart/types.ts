export interface CartState {
	items: CartItem[]
}

export type CartItem = {
	id: string
	img: string
	title: string
	price: string
	added: boolean
}