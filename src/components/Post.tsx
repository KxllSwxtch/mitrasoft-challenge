import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Comments from './Comments'

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

export interface IComment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

const jsonPlaceholderPhotosURL = 'https://jsonplaceholder.typicode.com/photos'
const jsonPlaceholderPostsURL = 'https://jsonplaceholder.typicode.com/posts'

const Post: React.FC<IPost> = ({ userId, id, title, body }): JSX.Element => {
	const [authorAvatar, setAuthorAvatar] = useState<string>('')
	const [comments, setComments] = useState<IComment[]>([])
	const [areCommentsHidden, setCommentsHidden] = useState<boolean>(true)

	useEffect(() => {
		const getAvatar = async () => {
			const res = await axios.get(`${jsonPlaceholderPhotosURL}/${id}`)
			setAuthorAvatar(res.data.url)
		}

		const getComments = async () => {
			const res = await axios.get(`${jsonPlaceholderPostsURL}/${id}/comments`)
			setComments(res.data)
		}

		getAvatar()
		getComments()
	}, [])

	const toggleComments = () => setCommentsHidden(!areCommentsHidden)

	return (
		<Card style={{ marginBottom: 20 }} className='h-100 w-100'>
			<Card.Img variant='top' src={authorAvatar} />
			<Card.Body className='d-flex flex-column justify-content-between p-3'>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{body}
					<br />
					<br />
					<Button variant='primary' onClick={toggleComments}>
						{areCommentsHidden ? 'Show Comments' : 'Hide Comments'}
					</Button>
					<br />
					<br />
					{areCommentsHidden ? null : <Comments comments={comments} />}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Post
