import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import AllCategories from '../AllCategories'
import Button from 'react-bootstrap/Button'


function Home(){
	const navigate = useNavigate();
    return (
			<Container
				style={{
					background: 'rgb(255,255,255)',
					marginTop: '3rem',
					textDecoration: 'none',
					marginBottom: '3rem',
				}}>
				<Carousel data-bs-theme='dark'>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.3&permmsgid=msg-a:r7552913750103353408&th=189c2a11e097dab7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8HKVsztTgmE1BBzeoZjf5PMwj9RMYOk_DfIHgVCiMADdmp0zoyunU1_9IslZAX4Cidk47ZzXSBAr1tlObvzQ1EfcO9cXTpsVroOtS6hvnePkpwnYGHBC07bCA&disp=emb&realattid=189c2a0fb5be9b742301//800x400?text=Third slide&bg=e5e5e5'
							alt='First slide'
						/>
						<Carousel.Caption
							style={{
								color: 'white',
								fontFamily:
									'Foldit cursive ,IBM Plex Mono monospace ,Roboto sans-serif',
							}}>
							<h1>Furniture</h1>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1.1&permmsgid=msg-f:1773443864786696713&th=189c89cc85b4fa09&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9zjF2mFgxZ6y-1vMVMZzsF8JIc0vDWwifme0XQ95qQHyvgNbDqIjX5lXegxHxdb3f2zKb3hsjmhKgR4y-AZpm-3HX2Yia3BcU3S5w9P_YaZY25Nv3BpqAyyRQ&disp=emb
                            /800x400?text=Third slide&bg=e5e5e5'
							alt='Second slide'
						/>
						<Carousel.Caption style={{ color: 'white' }}>
							<h1>Electronics</h1>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1&permmsgid=msg-a:r7552913750103353408&th=189c2a11e097dab7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9d7NGokJ81a0EYj84_jeR6nciOACjcYY4p8Of8dR0NRMSdWp0CJrXfZxRrA8PpIRGmvkxJ7E5c3BCb-s7MIsSnVSCLtAXJ90GuZNBnV-xSB-ETRpS_TvbC-bo&disp=emb&realattid=189c2a1028085712e2f2/800x400?text=Third slide&bg=e5e5e5'
							alt='Third slide'
						/>
						<Carousel.Caption style={{ color: 'white' }}>
							<h1>Women Fashion</h1>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://mail.google.com/mail/u/0?ui=2&ik=724174be16&attid=0.1.1&permmsgid=msg-f:1773445546046283084&th=189c8b53f8965d4c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8twSzWlarZB-aqMskDKaOFaGx-ienHUJO-ZuGlT6hxBBjZd6YG8jnhTQ56U1zkxVPkX_ei4aE4qY5enfHpysR4DPY1JadS8aK4p8lYNwRbEAY5VxORIPvmvXA&disp=emb/800x400?text=Thirdslide&bg=e5e5e5'
							alt='Third slide'
						/>
						<Carousel.Caption style={{ color: 'white' }}>
							<h1>Men Fashion</h1>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<Button
					variant="secondary" size="lg" active
					style={{
						marginTop: '2rem',
						color: 'white',
						fontFamily: 'IBM Plex Mono, monospace, Roboto, sans-serif',
						borderRadius: '10px',
						marginLeft: '26rem',
					}}
					onClick={() => navigate('/Index')}>
					Go somewhere
				</Button>
			</Container>
		)
}
export default Home;
