export interface CartState {
	itemsCart: CartItem[]
	totalPrice: number
}

export type CartItem = {
	id: string
	img: string
	title: string
	price: number
	addedCart: boolean
}