import React from 'react'
import './errorItems.scss'

const ErrorItems: React.FC = () => {
	return (
		<div className='errorItems'>
			<h6>
				Произошла ошибка <span>😕</span>
			</h6>
			<h5>Не удалось найти кроссовки</h5>
		</div>
	)
}

export default ErrorItems
