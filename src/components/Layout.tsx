import Container from 'react-bootstrap/Container'
import Navigation from './Navigation'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<Container>
			<Navigation />
			{children}
		</Container>
	)
}

export default Layout
