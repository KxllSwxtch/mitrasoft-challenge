import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from './Post'

const Posts: React.FC<{}> = (): JSX.Element => {
	return (
		<Row className='p-4'>
			<Col>
				<h1>Posts</h1>
			</Col>
		</Row>
	)
}

export default Posts
