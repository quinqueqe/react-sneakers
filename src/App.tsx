import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Bookmarks from './pages/bookmarks'
import Cart from './pages/cart'
import Order from './pages/order'
import Home from './pages/home'

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='order' element={<Order />} />
					<Route path='bookmarks' element={<Bookmarks />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
