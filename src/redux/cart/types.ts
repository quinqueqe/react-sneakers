export interface CartState {
	items: CartItem[]
	totalPrice: number
}

export type CartItem = {
	id: string
	img: string
	title: string
	price: number
	added: boolean
}