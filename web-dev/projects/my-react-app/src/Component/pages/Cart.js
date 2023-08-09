import cartContext from '../../ contexts/Context'
import Button from 'react-bootstrap/Button'
import ProductParent from '../ProductParent'
export default function Cart() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h2>Your cart is empty </h2>
			<Button
				variant='outline-dark'
				size='lg'
				style={{ marginTop: '30rem', color: 'withe' }}>
				Back
			</Button>

			<Button
				variant='outline-dark'
				size='lg'
				style={{ marginTop: '30rem', color: 'withe', marginLeft: '1rem' }}>
				Pay
			</Button>
		</div>
	)
}