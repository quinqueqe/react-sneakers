import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFullSneaker } from '../redux/fullSneaker/selectors'
import FullSneakerCard from '../components/fullSneakerCard'
import Skeleton from '../components/fullSneakerCard/skeleton'

const FullSneaker: React.FC = () => {
	const { item, status } = useSelector(selectFullSneaker)
	const getItem = new Array(1).fill(item)
	return (
		<div className='fullsneakers sect sectMain container'>
			<div className='fullsneakers-content'>
				{status === 'loading' ? (
					<Skeleton />
				) : (
					getItem.map((value, i) => <FullSneakerCard {...value} key={i} />)
				)}
			</div>
			{/* <Skeleton /> */}
			<Link to='/react-sneakers' className='fullsneakers-back-btn'>
				<div className='fullsneakers-back'>Вернуться на главную страницу</div>
			</Link>
		</div>
	)
}

export default FullSneaker
