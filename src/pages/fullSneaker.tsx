import React from 'react'
import { Link } from 'react-router-dom'
import FullSneakerCard from '../components/fullSneakerCard'
import Skeleton from '../components/fullSneakerCard/skeleton'
import { SneakersItem, useFullSneaker } from '../store'

const FullSneaker: React.FC = () => {
	const { item, status } = useFullSneaker(state => state)
	const getItem = new Array(1).fill(item)
	return (
		<div className='fullsneakers sect sectMain container'>
			<div className='fullsneakers-content'>
				{status === 'loading' ? (
					<Skeleton />
				) : (
					getItem.map((value: SneakersItem, i: number) => (
						<FullSneakerCard {...value} key={i} />
					))
				)}
			</div>
			<Link to='/react-sneakers' className='fullsneakers-back-btn'>
				<div className='fullsneakers-back'>Вернуться на главную страницу</div>
			</Link>
		</div>
	)
}

export default FullSneaker
