import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { selectSneakers } from '../../redux/sneakers/selectors'
// import { setAddCart } from '../../redux/sneakers/slice'
import { SneakersItem } from '../../redux/sneakers/types'
import { setItem } from '../../redux/cart/slice'
import { selectCart } from '../../redux/cart/selectors'

const SneakersCard: React.FC<SneakersItem> = ({ id, img, title, price }) => {
	const { items } = useSelector(selectCart)
	const item = items.find(obj => obj.id === id)
	const added = item?.added || false; // не понятный код на данном этапе

	const dispatch = useDispatch()

	const pushItem = (id: string) => {
		const item: SneakersItem = {
			id,
			img,
			title,
			price,
		}
		// dispatch(setAddCart(!addCart))
		dispatch(setItem(item))
	}
	return (
		<li className='sneakers-card'>
			<img src={img} alt='img' />
			<h4>{title}</h4>
			<div className='sneakers-card-bottom'>
				<div>
					<h6>Цена:</h6>
					<h2>{price} руб</h2>
				</div>
				<div>
					<button
						className={
							added
								? 'sneakers-card-bottom-btn'
								: 'sneakers-card-bottom-btn__disabled'
						}
						onClick={() => pushItem(id)}
					>
						{added ? (
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
									fill='#D3D3D3'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
		</li>
	)
}

export default SneakersCard
