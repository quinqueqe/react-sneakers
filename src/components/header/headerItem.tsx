import React from 'react'
import { Link } from 'react-router-dom'

export type HeaderItemType = {
	id: number
	img: string
	desc: string
}

const HeaderItem: React.FC<HeaderItemType> = ({ id, img, desc }) => {
	const Links = ['bookmarks', 'profile']
	return (
		<Link to={`${Links[id]}`} className='header-right__link'>
			<img src={img} alt='img' />
			<p>{desc}</p>
		</Link>
	)
}

export default HeaderItem
