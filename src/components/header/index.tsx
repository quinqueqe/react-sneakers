import React from 'react'
import './header.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'

const Header: React.FC = () => {
	const { totalPrice } = useSelector(selectCart)
	return (
		<header className='header containerHeader sect'>
			<Link to='/react-sneakers' className='header-left'>
				<img src={logo} alt='img' />
				<div>
					<h3>REACT SNEAKERS</h3>
					<b>Магазин лучших кроссовок</b>
				</div>
			</Link>
			<div className='header-right'>
				<ul>
					<Link to='cart' className='header-right__link'>
						<img src='https://i.postimg.cc/MpNG11sx/cart.png' alt='img' />
						<p>{totalPrice} руб</p>
					</Link>
					<Link to='bookmarks' className='header-right__link'>
						<img src='https://i.postimg.cc/6pjvg7Y1/Vector.png' alt='img' />
						<p>Закладки</p>
					</Link>
				</ul>
			</div>
		</header>
	)
}

export default Header
