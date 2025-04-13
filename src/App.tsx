import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import Cart from './pages/cart'
import Order from './pages/order'
import Bookmarks from './pages/bookmarks'
import FullSneaker from './pages/fullSneaker'
import NotFound from './pages/notFound'

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/react-sneakers' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='order' element={<Order />} />
					<Route path='bookmarks' element={<Bookmarks />} />
					<Route path='/react-sneakers/sneaker/:id' element={<FullSneaker />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
