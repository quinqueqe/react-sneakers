import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={320}
		height={400}
		viewBox='0 0 310 400'
		backgroundColor='#cfcfcf'
		foregroundColor='#ffffff'
		// {...props}
	>
		<rect x='10' y='0' rx='33' ry='33' width='300' height='200' />
		<rect x='10' y='218' rx='20' ry='20' width='300' height='90' />
		<rect x='10' y='320' rx='5' ry='5' width='70' height='28' />
		<rect x='235' y='320' rx='20' ry='20' width='70' height='70' />
		<rect x='10' y='360' rx='7' ry='7' width='145' height='28' />
	</ContentLoader>
)

export default Skeleton
