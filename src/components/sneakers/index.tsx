import React from 'react'
import './sneakers.scss'
import SneakersInput from './sneakersInput'
import SneakersCard from './sneakersCard'
import { fetchSneakers } from '../../redux/sneakers/asyncActions'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { selectSneakers } from '../../redux/sneakers/selectors'

const Sneakers: React.FC = () => {
	const dispatch = useAppDispatch()
	const { inputValue, items } = useSelector(selectSneakers)
	React.useEffect(() => {
		dispatch(fetchSneakers())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue])
	return (
		<div className='sneakers container sect sectMain'>
			<div className='sneakers-title'>
				<h5>Все кроссовки</h5>
				<SneakersInput />
			</div>
			<ul className='sneakers-content'>
				{items.map((item, i) => (
					<SneakersCard {...item} key={i} />
				))}
			</ul>
		</div>
	)
}

export default Sneakers
