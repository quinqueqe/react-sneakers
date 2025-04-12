import React from 'react'
import Empty from '../empty'
import box from '../../assets/box.png'

const CartEmpty: React.FC = () => {
	return (
		<Empty
			img={box}
			title='Корзина пустая'
			firstDesc='Добавьте хотя бы одну пару'
			secondDesc='кроссовок, чтобы сделать заказ'
		/>
	)
}

export default CartEmpty
