import React from 'react'
import Empty from '../empty'
import smile from '../../assets/smile.png'

const BookmarksEmpty: React.FC = () => {
	return (
		<Empty
			img={smile}
			title='Закладок нет :('
			firstDesc=''
			secondDesc='Закладок нет :('
		/>
	)
}

export default BookmarksEmpty
