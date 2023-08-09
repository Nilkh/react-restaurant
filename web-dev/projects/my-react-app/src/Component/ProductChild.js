import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import cartContext from '../ contexts/Context'
import React, { useContext } from 'react'



export default function ProductChild({ product, handleAddProductToCart }) {
	// console.log(product)
	const { setCartItems } = useContext(cartContext)
	return (
		<>
			<Card
				border='secondary'
				style={{
					width: '17rem',
					marginTop: '3rem',
					textAlign: 'center',
					margin: '1rem',
				}}>
				<Card.Img variant='top' src={product.images} />
				<Card.Body>
					<Card.Title
						style={{ fontFamily: 'IBM Plex Sans Condensed, sans-serif' }}>
						<h3>{product.title}</h3>
					</Card.Title>
					<Card.Text
						style={{
							fontFamily:
								'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
							marginTop: '0,1rem',
						}}>
						{product.description}
						<h5 style={{ marginTop: '1rem' }}>${product.price}</h5>
					</Card.Text>
				</Card.Body>
				<Button
					variant='outline-dark'
					size='lg'
					onClick={handleAddProductToCart}>
					Add to cart
				</Button>
			</Card>
		</>
	)
}