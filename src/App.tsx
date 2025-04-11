import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import Cart from './pages/cart'
import Bookmarks from './pages/bookmarks'
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
