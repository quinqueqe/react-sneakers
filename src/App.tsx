import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Bookmarks from './pages/bookmarks'
import Cart from './pages/cart'
import Home from './pages/home'
import Profile from './pages/profile'

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='bookmarks' element={<Bookmarks />} />
					<Route path='profile' element={<Profile />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
