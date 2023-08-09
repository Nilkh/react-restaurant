import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './Component/index'
import 'atropos/css'
import NavbarBar from './Component/pages/Navbar'
import Home from './Component/pages/Home'
import Contact from './Component/pages/Contact'
import About from './Component/pages/About'
import Cart from './Component/pages/Cart'
import ProductParent from './Component/ProductParent'
import React, { useState, useEffect } from 'react'
import { DataProvider } from './ contexts/Context'
function App() {
	const [product, setProduct] = useState({})
	const [cartItems, setCartItems] = useState([])

	return (
		<>
			<DataProvider>
				<NavbarBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Index' element={<Index />} />

					<Route path='/Cart' element={<Cart />}/>
					<Route path='/ProductParent' element={<ProductParent />}/>
				</Routes>
			</DataProvider>
		</>
	)	
}

export default App
