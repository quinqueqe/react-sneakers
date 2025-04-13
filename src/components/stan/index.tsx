import React from 'react'
import './stan.scss'
import stanDisney from '../../assets/stan-disney.png'
import slide from '../../assets/stan-slide.png'
// import Slider from '../slider'

const Stan: React.FC = () => {
	return (
		<div className='container sect stan'>
			<div className='stan-content'>
				<div className='stan-logo'>
					<img src={stanDisney} alt='img' />
				</div>
				<div className='stan-main'>
					<div className='stan-left'>
						<h4>
							Stan Smith<span>,</span>
						</h4>
						<h5>Forever!</h5>
						<a href='#sneakers'>Купить</a>
					</div>
					<div className='stan-slider'>
						{/* <Slider /> */}
						<img src={slide} alt="img" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stan
