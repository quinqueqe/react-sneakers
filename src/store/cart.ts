import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import { SneakersItem } from './sneakers'

interface CartState {
	itemsCart: CartItem[]
	totalPrice: number
	setItemsCart: (item: SneakersItem) => void
	clearCart: () => void
	deleteItemCart: (id: string) => void
	setTotalPrice: (price: number) => void
}

type CartItem = {
	id: string
	img: string
	title: string
	price: number
	addedCart: boolean
}

export const useCart = create<CartState>()(
	devtools(
		persist(
			set => ({
				itemsCart: [],
				totalPrice: 0,
				setItemsCart: item => {
					set(state => {
						const itemsCartCopy = [...state.itemsCart]
						const findItem = state.itemsCart.find(obj => obj.id === item.id)
						if (findItem) {
							findItem.addedCart = true
						} else {
							itemsCartCopy.push({ ...item, addedCart: true })
						}
						return { itemsCart: itemsCartCopy }
					})
				},
				clearCart: () => set({ itemsCart: [], totalPrice: 0 }),
				deleteItemCart: id => {
					set(state => {
						// 1. Находим удаляемый элемент
						const itemToRemove = state.itemsCart.find(item => item.id === id)
						// Если элемент не найден, возвращаем исходное состояние
						if (!itemToRemove) return state
						// 2. Фильтруем массив, удаляя элемент
						const updatedItems = state.itemsCart.filter(item => item.id !== id)
						// 3. Пересчитываем общую стоимость
						const newTotalPrice = state.totalPrice - itemToRemove.price
						// 4. Возвращаем обновлённое состояние
						return {
							itemsCart: updatedItems,
							totalPrice: newTotalPrice,
						}
					})
				},
				setTotalPrice: price => set({ totalPrice: price }),
			}),
			{
				name: 'cart-storage', // ключ в localStorage
				storage: createJSONStorage(() => localStorage), // можно указать другое хранилище
			}
		)
	)
)
