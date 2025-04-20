import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss'
import { useSneakers } from '../../store'


const Pagination: React.FC = () => {
	const setCurrentPage = useSneakers(state => state.setCurrentPage)
	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={e => setCurrentPage(e.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
