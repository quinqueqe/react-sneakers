import React from 'react'
import './sneakers.scss'
import SneakersInput from './sneakersInput'
import SneakersCard from './sneakersCard'
import Pagination from '../pagination'
import Skeleton from './skeleton'
import ErrorItems from '../errorItems'

import { SneakersItem, useSneakers } from '../../store'

const Sneakers: React.FC = () => {
	const inputValue = useSneakers(state => state.inputValue)
	const items = useSneakers(state => state.items)
	const currentPage = useSneakers(state => state.currentPage)
	const status = useSneakers(state => state.status)
	const fetchSneakers = useSneakers(state => state.fetchSneakers)
	React.useEffect(() => {
		fetchSneakers({ currentPage, inputValue })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue, currentPage])

	const skelet = new Array(4).fill(<Skeleton />)
	return (
		<div className='sneakers container sect sectMain'>
			<div className='sneakers-title'>
				<h5>Все кроссовки</h5>
				<SneakersInput />
			</div>
			<div className='sneakers-wrapper' id='sneakers'>
				{status === 'loading' ? (
					<div className='sneakers-wrapper-skeleton'>{skelet}</div>
				) : items.length === 0 || status === 'loading' ? (
					<ErrorItems />
				) : (
					<ul className='sneakers-content'>
						{items.map((item: SneakersItem, i: number) => (
							<SneakersCard {...item} key={i} />
						))}
					</ul>
				)}
			</div>

			<div className='sneakers-pagination'>
				<Pagination />
			</div>
		</div>
	)
}

export default Sneakers
