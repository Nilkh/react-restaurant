
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


export default function NavbarBar() {
		const navigate = useNavigate()
		return (
			<div
				style={{
					background: 'rgb(242, 242, 242)',
					display: 'flex',
					fontSize: '1rem',
				}}>
				<Navbar>
					<Container style={{}}>
						<Navbar.Brand
							href='/Home'
							style={{
								fontFamily: 'IBM Plex Sans Condensed, sans-serif',
								textJustify: '1rem',
							}}>
							Home
						</Navbar.Brand>
						<Navbar.Brand href='/About'>About</Navbar.Brand>
						<Navbar.Brand href='/Contact'>Contact</Navbar.Brand>
					</Container>
				</Navbar>
				<div
					style={{
						marginLeft: ' 15rem',
						marginTop: '1rem',
						textAlign: 'center',
						fontFamily: 'IBM Plex Sans Condensed, sans-serif',
					}}>
					El Palacio
				</div>
				<div
					style={{
						marginLeft: '33rem',
						position: 'left',
					}}>
					<FontAwesomeIcon
						icon={faCartShopping}
						onClick={() => navigate('/Cart')}
					/>
				</div>
			</div>
		)
 }

