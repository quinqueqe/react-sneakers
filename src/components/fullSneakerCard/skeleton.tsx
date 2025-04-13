import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={1350}
		height={563}
		viewBox='0 0 1350 563'
		backgroundColor='#cfcfcf'
		foregroundColor='#ffffff'
	>
		<rect x='0' y='0' rx='20' ry='20' width='500' height='400' />
		<rect x='0' y='425' rx='10' ry='10' width='575' height='30' />
		<rect x='3' y='500' rx='10' ry='10' width='122' height='26' />
		<rect x='5' y='535' rx='10' ry='10' width='150' height='30' />
		<rect x='1250' y='465' rx='20' ry='20' width='100' height='100' />
	</ContentLoader>
)

export default Skeleton
