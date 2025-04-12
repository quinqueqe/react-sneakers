import React from 'react'
import './empty.scss'
import { Link } from 'react-router-dom'
import { EmptyType } from './types'

const Empty: React.FC<EmptyType> = ({ img, title, firstDesc, secondDesc }) => {
	return (
		<div className='cart-empty sect container'>
			<div className='cart-empty__content'>
				<img src={img} alt='img' />
				<h2 className='cart-empty__content-title'>{title}</h2>
				<h5 className='cart-empty__content-desc'>{firstDesc}</h5>
				<h5 className='cart-empty__content-desc'>{secondDesc}</h5>
				<Link to='/' className='cart-empty-btn'>
					Вернуться назад
				</Link>
			</div>
		</div>
	)
}

export default Empty
