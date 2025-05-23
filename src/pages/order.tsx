import React from 'react'
import Empty from '../components/empty'
import order from '../assets/order.png'

const Order: React.FC = () => {
	const random = Math.round(Math.random() * 1000)
	return (
		<div className='order sect sectMain container'>
			<Empty
				img={order}
				title='Заказ оформлен!'
				firstDesc={`Заказ #${random} скоро будет передан`}
				secondDesc='курьерской доставке'
			/>
		</div>
	)
}

export default Order
