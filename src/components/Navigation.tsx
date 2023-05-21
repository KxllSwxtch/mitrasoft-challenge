import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<Card className='mb-3'>
			<Card.Header className='p-2'>
				<Nav variant='tabs' defaultActiveKey='#first'>
					<Nav.Item>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<Nav.Link href='/'>Home</Nav.Link>
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to='/about-me' style={{ textDecoration: 'none' }}>
							<Nav.Link href='/about-me'>About Me</Nav.Link>
						</Link>
					</Nav.Item>
				</Nav>
			</Card.Header>
		</Card>
	)
}

export default Navigation
