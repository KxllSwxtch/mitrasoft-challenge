import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Post, { IPost } from './Post'

interface PostsProps {
	posts: IPost[]
}

const Posts: React.FC<PostsProps> = ({ posts }): JSX.Element => {
	return (
		<Container fluid>
			<Row>
				{posts.map((post) => (
					<Col key={post.id}>
						<Post {...post} />
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default Posts
