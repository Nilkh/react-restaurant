import { getProducts } from './api'
import React, { useState, useEffect ,useContext} from 'react'
import ProductChild from './ProductChild'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import cartContext from '../ contexts/Context'

export default function ProductParent() {
    const [product, setProduct] = useState({})
    const {setCartItems}  = useContext(cartContext);
	
	useEffect(() => {
		getProducts().then((data) => {
			// console.log(data)
			setProduct(data)
		})
	}, [])

	function handleAddProductToCart(event) {
		const productToAdd = event.target.value
		console.log(event.target)
		setCartItems((prev) => {
			// console.log(prev)
			return [...prev, productToAdd]
		})
	}

	return (
		<>
			<Container>
				<Row>
					{Object.values(product).map((item) => {
						return (
							<ProductChild
								product={item}
								key={item.id}
								handleAddProductToCart={handleAddProductToCart}>
							</ProductChild>
						)
					})}
				</Row>
			</Container>
		</>
	)
}
