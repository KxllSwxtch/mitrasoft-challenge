import { IComment } from './Post'

interface CommentsProps {
	comments: IComment[]
}

const Comments: React.FC<CommentsProps> = ({ comments }): JSX.Element => {
	return (
		<ul>
			{comments.map((comment: IComment) => (
				<li>{comment.body}</li>
			))}
		</ul>
	)
}

export default Comments
