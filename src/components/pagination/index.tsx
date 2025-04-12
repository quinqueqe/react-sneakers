import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import styles from './pagination.module.scss'
import { setCurrentPage } from '../../redux/sneakers/slice'
import { useSelector } from 'react-redux'
import { selectSneakers } from '../../redux/sneakers/selectors'

const Pagination: React.FC = () => {
	const dispatch = useDispatch()
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
