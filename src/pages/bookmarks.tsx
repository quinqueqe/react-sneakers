import React from 'react'
import { Link } from 'react-router-dom'
import SneakersCard from '../components/sneakers/sneakersCard'
import BookmarksEmpty from '../components/bookmarksEmpty'
import { SneakersItem, useBookmarks } from '../store'

const Bookmarks: React.FC = () => {
	const itemsBs = useBookmarks(state => state.itemsBs)
	return (
		<div className='bookmarks sect container sectMain'>
			{itemsBs.length === 0 ? (
				<BookmarksEmpty />
			) : (
				<>
					<div className='bookmarks--title'>
						<Link to='/react-sneakers'>
							<button>
								<svg
									width='15'
									height='20'
									viewBox='0 0 7 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M6 11L1 6L6 1'
										stroke='#C8C8C8'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</button>
						</Link>
						<h3>Мои закладки</h3>
					</div>
					<ul className='bookmarks-content'>
						{itemsBs.map((item: SneakersItem, i: number) => (
							<SneakersCard key={i} {...item} />
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export default Bookmarks
