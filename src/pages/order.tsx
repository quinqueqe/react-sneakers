import React from 'react'
import Empty from '../components/empty'
import order from '../assets/order.png'

const CartEmpty: React.FC = () => {
	const random = Math.round(Math.random() * 1000)
	return (
		<Empty
			img={order}
			title='Заказ оформлен!'
			firstDesc={`Заказ #${random} скоро будет передан`}
			secondDesc='курьерской доставке'
		/>
	)
}

export default CartEmpty
