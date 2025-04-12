import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'

const MainLayout: React.FC = () => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<Outlet />
			</div>
		</>
	)
}

export default MainLayout
