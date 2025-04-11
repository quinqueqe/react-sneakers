import React from 'react'
import './header.scss'
import logo from '../../assets/logo.svg'
import HeaderItem, { HeaderItemType } from './headerItem'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	const headerItemDb = [
		{
			id: 0,
			img: 'https://i.postimg.cc/6pjvg7Y1/Vector.png',
			desc: 'Закладки',
		},
		{
			id: 1,
			img: 'https://i.postimg.cc/t4C6Bdtx/Union.png',
			desc: 'Профиль',
		},
	]
	return (
		<header className='header containerHeader sect'>
			<Link to='' className='header-left'>
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
						<p>0 руб</p>
					</Link>
					{headerItemDb.map((item: HeaderItemType, i: number) => (
						<HeaderItem {...item} key={i} />
					))}
				</ul>
			</div>
		</header>
	)
}

export default Header
