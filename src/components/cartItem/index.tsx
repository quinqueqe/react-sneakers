import React from 'react'
import { SneakersItem } from '../../redux/sneakers/types'
import { useDispatch } from 'react-redux'
import { deleteItemCart } from '../../redux/cart/slice'

const CartItem: React.FC<SneakersItem> = ({ id, img, title, price }) => {
	const dispatch = useDispatch()
	return (
		<li className='cart-item'>
			<img src={img} alt='img' />
			<div>
				<h3>{title}</h3>
				<p>{price} руб</p>
			</div>
			<button
				onClick={() => {
					if (window.confirm('Вы действительно хотите удалить этот товар?')) {
						dispatch(deleteItemCart(id))
					}
				}}
			>
				<svg
					width='10'
					height='10'
					viewBox='0 0 10 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z'
						fill='#B5B5B5'
					/>
				</svg>
			</button>
		</li>
	)
}

export default CartItem
