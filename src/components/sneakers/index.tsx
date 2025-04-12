import React from 'react'
import './sneakers.scss'
import SneakersInput from './sneakersInput'
import SneakersCard from './sneakersCard'
import Pagination from '../pagination'
import Skeleton from './skeleton'
import { fetchSneakers } from '../../redux/sneakers/asyncActions'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectSneakers } from '../../redux/sneakers/selectors'

const Sneakers: React.FC = () => {
	const dispatch = useAppDispatch()
	const { inputValue, items, currentPage, status } = useSelector(selectSneakers)
	React.useEffect(() => {
		dispatch(fetchSneakers({ currentPage, inputValue }))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue, currentPage])

	const skelet = new Array(4).fill(<Skeleton/>)
	return (
		<div className='sneakers container sect sectMain'>
			<div className='sneakers-title'>
				<h5>Все кроссовки</h5>
				<SneakersInput />
			</div>
			<ul className='sneakers-content'>
				{status === 'loading' ? (
					skelet
				) : (
					items.map((item, i) => <SneakersCard {...item} key={i} />)
				)}
			</ul>
			<div className='sneakers-pagination'>
				<Pagination />
			</div>
		</div>
	)
}

export default Sneakers
