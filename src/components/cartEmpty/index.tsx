import React from 'react'
import './cartEmpty.scss'
import { Link } from 'react-router-dom'
import smile from '../../assets/smile.png'

const CartEmpty: React.FC = () => {
	return (
		<div className='cart-empty sect container'>
			<div className='cart-empty__content'>
			<img src={smile} alt="img" />

				<h2 className='cart-empty__content-title'>У вас нет товаров в корзине</h2>
				<h5 className='cart-empty__content-desc'>Вы нищеброд?</h5>
				<h5 className='cart-empty__content-desc'>Добавьте хотя бы 1 товар в корзину</h5>
				<Link to='/' className='cart-empty-btn'>Вернуться назад</Link>
			</div>
		</div>
	)
}

export default CartEmpty
