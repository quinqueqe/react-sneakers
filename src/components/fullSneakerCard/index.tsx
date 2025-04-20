import React from 'react'
import './fullSneakerCard.scss'
import { useCart, SneakersItem, useBookmarks } from '../../store'

const FullSneakerCard: React.FC<SneakersItem> = ({ id, img, title, price }) => {
	const { deleteItemCart, setItemsCart, setTotalPrice } = useCart(
		state => state
	)
	const itemsCart = useCart(state => state.itemsCart)
	const totalPrice = useCart(state => state.totalPrice)
	const itemCart = itemsCart.find(obj => obj.id === id)
	const addedCart = itemCart?.addedCart || false // не понятный код на данном этапе

	const itemsBs = useBookmarks(state => state.itemsBs)
	const { deleteItemBs, setItemsBs } = useBookmarks(state => state)
	const itemBs = itemsBs.find(obj => obj.id === id)
	const addedBs = itemBs?.addedBs || false

	// const dispatch = useAppDispatch()

	const pushItemCart = (id: string) => {
		const item: SneakersItem = {
			id,
			img,
			title,
			price,
		}
		setTotalPrice(totalPrice + price)
		setItemsCart(item)
		if (itemsCart.find(obj => obj.id === id)) {
			deleteItemCart(id)
			setTotalPrice(totalPrice - price)
		}
	}

	const pushItemBookmarks = (id: string) => {
		const item: SneakersItem = {
			id,
			img,
			title,
			price,
		}
		setItemsBs(item)
		if (itemsBs.find(obj => obj.id === id)) {
			deleteItemBs(id)
		}
	}

	return (
		<li className='fullsneakers-card sneakers-card'>
			<img src={img} alt='img' />
			<h4>{title}</h4>
			<div className='fullsneakers-card-bottom sneakers-card-bottom'>
				<button
					onClick={() => pushItemBookmarks(id)}
					className={
						addedBs
							? 'fullsneakers-card-bottom-bookmarks-true sneakers-card-bottom-bookmarks-true'
							: 'fullsneakers-card-bottom-bookmarks-false sneakers-card-bottom-bookmarks-false'
					}
				>
					<svg
						className='sneakers-card-bottom-bookmarks-svg'
						width='15'
						height='14'
						viewBox='0 0 15 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z'
							// fill={addedBs ? '#FF8585' : '#e7e5e5'}
						/>
					</svg>
				</button>
				<div>
					<h6>Цена:</h6>
					<h2>{price} руб</h2>
				</div>
				<div>
					<button
						className={
							addedCart
								? 'fullsneakers-card-bottom-btn-true sneakers-card-bottom-btn-true'
								: 'fullsneakers-card-bottom-btn-false sneakers-card-bottom-btn-false'
						}
						onClick={() => pushItemCart(id)}
					>
						{addedCart ? (
							<svg
								width='12'
								height='11'
								viewBox='0 0 12 11'
								fill='#fffff'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g filter='url(#filter0_d_60_204)'>
									<path
										d='M9.6567 0.620692C9.83936 0.436333 10.0876 0.331772 10.3471 0.329861C10.6066 0.327949 10.8563 0.428842 11.0416 0.61049C11.227 0.792138 11.3329 1.03977 11.3362 1.29927C11.3395 1.55877 11.24 1.80903 11.0594 1.99536L5.83271 8.52936C5.74292 8.62603 5.63456 8.70362 5.51412 8.75749C5.39368 8.81136 5.26362 8.84041 5.1317 8.8429C4.99979 8.84539 4.86872 8.82127 4.74633 8.77198C4.62394 8.72269 4.51274 8.64924 4.41937 8.55602L0.954039 5.09202C0.76989 4.90779 0.666472 4.65794 0.666534 4.39746C0.666597 4.13697 0.770135 3.88717 0.954372 3.70302C1.13861 3.51888 1.38845 3.41546 1.64894 3.41552C1.90943 3.41558 2.15922 3.51912 2.34337 3.70336L5.08404 6.44469L9.6307 0.651358C9.63897 0.640817 9.64787 0.630798 9.65737 0.621358L9.6567 0.620692Z'
										fill='white'
									/>
								</g>
								<defs>
									<filter
										id='filter0_d_60_204'
										x='0.666534'
										y='0.329834'
										width='10.6698'
										height='10.5132'
										filterUnits='userSpaceOnUse'
										color-interpolation-filters='sRGB'
									>
										<feFlood flood-opacity='0' result='BackgroundImageFix' />
										<feColorMatrix
											in='SourceAlpha'
											type='matrix'
											values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
											result='hardAlpha'
										/>
										<feOffset dy='2' />
										<feColorMatrix
											type='matrix'
											values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
										/>
										<feBlend
											mode='normal'
											in2='BackgroundImageFix'
											result='effect1_dropShadow_60_204'
										/>
										<feBlend
											mode='normal'
											in='SourceGraphic'
											in2='effect1_dropShadow_60_204'
											result='shape'
										/>
									</filter>
								</defs>
							</svg>
						) : (
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z'
									fill='#8bb43c'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</li>
	)
}

export default FullSneakerCard
