import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default MainLayout
