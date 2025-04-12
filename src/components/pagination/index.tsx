import React from 'react'
import ReactPaginate from 'react-paginate'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import styles from './pagination.module.scss'
import { setCurrentPage } from '../../redux/sneakers/slice'


const Pagination: React.FC = () => {
	const dispatch = useAppDispatch()
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
